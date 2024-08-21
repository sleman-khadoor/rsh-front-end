<template>
    <div>
        <div v-if="!categoriesPending && !categoriesError && (categories && categories.length)" class="row bg-secondary p-1 m-0">
            <CategoriesCarousel :categories="categories" @updateCategory="updateCategory($event)"/>
        </div>
        <div class="row bg-secondary px-5 pb-5 pt-2 justify-content-center m-0">
                <BlogsCard :blogs="blogs"/>
        </div>
        <div v-if="!blogsPending && ! blogsError && (blogs && blogs.length)" class="row bg-secondary justify-content-center pb-5 m-0">
            <ClientOnly>
                <slot name="loading">
                    <Pagination v-if="!blogsPending" :meta="blogsMeta" @updatePage="updatePagination($event)"/>
                </slot>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue';
    
    const runTimeConfig = useRuntimeConfig();
    const headers = ref({});
    const page = ref(1);
    const selectedCategories = ref([]);
    const title = ref('');
    const author = ref('');
    const { locale } = useI18n()
    // State to manage fetch pending and errors
    const categories = ref([]);
    const categoriesPending = ref(true);
    const categoriesError = ref(null);
    const blogs = ref([]);
    const blogsMeta = ref({});
    const blogsPending = ref(true);
    const blogsError = ref(null);

    // Function to fetch categories
    async function fetchCategories() {
        try {
            const response = await $fetch(`${runTimeConfig.public.API_URL}/blog-categories`, {
                headers: headers.value,
            });
            categories.value = response.data;

            // Fetch blogs after categories are loaded
            fetchBlogs();
        } catch (error) {
            categoriesError.value = error;
            console.error('Error fetching categories:', error);
        } finally {
            categoriesPending.value = false;
        }
    }

    // Function to fetch blogs
    async function fetchBlogs() {
        let qp = {
            page: page.value,
            perPage: 12,
            include: ['author'],
            'filter[title]': title.value,
            'filter[author]': author.value
        }
        selectedCategories.value.forEach((element, iter) => {
            qp[`filter[blog_category][${iter}]`] = element.id
        });
        try {
            const response = await $fetch(`${runTimeConfig.public.API_URL}/blogs`, {
                headers: headers.value,
                query: qp
            });
            blogs.value = response.data;
            blogsMeta.value = response.meta;
        } catch (error) {
            blogsError.value = error;
            console.error('Error fetching blogs:', error);
        } finally {
            blogsPending.value = false;
        }
    }

    // Update functions
    function updatePagination(newPage) {
        page.value = newPage;
        fetchBlogs();
    }

    function updateCategory(newCat) {
        selectedCategories.value = newCat;
        fetchBlogs();
    }

    function updateSearch(newVal) {
        if (newVal.key === 'title') {
            title.value = newVal.value;
            author.value = ''; // Use empty string instead of null
        } else if (newVal.key === 'author') {
            author.value = newVal.value;
            title.value = ''; // Use empty string instead of null
        }
        fetchBlogs();
    }

    // Fetch categories and blogs when the component is mounted
    onMounted(async () => {
        headers.value = API_HEADER(); // Set headers in the setup context
        try {
            await fetchCategories();
        } catch (error) {
            console.error('Error during onMounted fetch:', error);
        }
    });

    useHead({
      title: locale.value === 'ar'
          ? 'مدونات مع رشم | أحدث المقالات والمدونات'
          : 'Blogs with Rashm | Latest Articles and Blogs',
      meta: [
        { 
          name: 'description', 
          content: locale.value === 'ar'
              ? 'اكتشف أحدث المقالات والمدونات في موقع رشم. تصفح مواضيع متنوعة وابقَ على اطلاع بأحدث الأخبار والمحتويات.'
              : 'Discover the latest articles and blogs on Rashm. Browse through various topics and stay updated with the latest news and content.'
        },
        { 
          name: 'keywords', 
          content: locale.value === 'ar'
              ? 'مدونات, رشم, مقالات, أخبار, محتوى, تصفح, مدونات جديدة'
              : 'blogs, Rashm, articles, news, content, browse, latest blogs, post'
        }
      ],
      link: [
        { rel: 'canonical', href: 'https://rashm.com.sa/blogs' }
      ]
    });
</script>