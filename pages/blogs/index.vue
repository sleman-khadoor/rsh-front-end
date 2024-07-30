<template>
    <div>
        <NuxtLoadingIndicator/>
        <Title>Blogs with Rashm</Title>
        <Meta name="description" content="Blogs with Rashm" />
        <!-- <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search @search="updateSearch($event)"/>
            </div>
        </div> -->
        <div class="row bg-secondary p-1">
            <CategoriesCarousel v-if="!categoriesPending" :categories="categories" @updateCategory="updateCategory($event)"/>
        </div>
        <div class="row bg-secondary px-5 pb-5 pt-2 justify-content-center">
            <div v-for="(blog,i) in blogs" :key="i" class="col-lg-3 col-md-4 col-sm-6 w-fc">
                <BlogsCard :blog="blog"/>
            </div>
        </div>
        <div class="row bg-secondary justify-content-center pb-5">
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
    const category = ref(1);
    const title = ref('');
    const author = ref('');
    
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
            category.value = response.data[0].id;

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
        try {
            const response = await $fetch(`${runTimeConfig.public.API_URL}/blogs`, {
                headers: headers.value,
                query: { 
                    page: page.value,
                    include: ['author'],
                    'filter[blog_category][0]': category.value,
                    'filter[title]': title.value,
                    'filter[author]': author.value
                }
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
        category.value = newCat.id;
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
</script>
