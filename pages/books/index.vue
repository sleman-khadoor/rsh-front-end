<template>
    <div>
        <Title>Books with Rashm</Title>
        <Meta name="description" content="Books with Rashm" />
        <div class="row m-0 bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search :dropdown="true" @search="updateSearch($event)"/>
            </div>
        </div>
        <div class="row m-0 bg-secondary p-1">
            <CategoriesCarousel v-if="!categoriesPending" :categories="categories" @updateCategory="updateCategory($event)"/>
        </div>
        <div class="row m-0 bg-secondary px-5 pb-5 pt-2 justify-content-center">
            <div v-for="(book,i) in books" :key="i" class="col mx-1 w-fc">
                <BooksCard :book="book"/>
            </div>
        </div>
        <div class="row m-0 bg-secondary justify-content-center pb-5">
            <ClientOnly>
                <slot name="loading">
                    <Pagination v-if="!booksPending" :meta="booksMeta" @updatePage="updatePagination($event)"/>
                </slot>
            </ClientOnly>
        </div>
    </div>
</template>
<script setup>
    import { ref, onMounted } from 'vue';
    
    const { locale } = useI18n()
    const runTimeConfig = useRuntimeConfig();
    const router = useRouter();
    const headers = ref({});
    const page = ref(1);
    const selectedCategories = ref([]);
    const title = ref('');
    const author = ref('');
    
    // State to manage fetch pending and errors
    const categories = ref([]);
    const categoriesPending = ref(true);
    const categoriesError = ref(null);
    const books = ref([]);
    const booksMeta = ref({});
    const booksPending = ref(true);
    const booksError = ref(null);

    // Function to fetch categories
    async function fetchCategories() {
        try {
            const response = await $fetch(`${runTimeConfig.public.API_URL}/book-categories`, {
                headers: headers.value,
            });
            categories.value = response.data;

            // Fetch books after categories are loaded
            fetchBooks();
        } catch (error) {
            categoriesError.value = error;
            console.error('Error fetching categories:', error);
        } finally {
            categoriesPending.value = false;
        }
    }

    // Function to fetch books
    async function fetchBooks() {
        let qp = {
            page: page.value,
            include: ['author'],
            'filter[title]': title.value,
            'filter[author]': author.value
        }
        selectedCategories.value.forEach((element, iter) => {
            qp[`filter[book_category][${iter}]`] = element.id
        });
        try {
            const response = await $fetch(`${runTimeConfig.public.API_URL}/books`, {
                headers: headers.value,
                query: qp
            });
            books.value = response.data;
            booksMeta.value = response.meta;
        } catch (error) {
            booksError.value = error;
            console.error('Error fetching books:', error);
        } finally {
            booksPending.value = false;
        }
    }

    // Update functions
    function updatePagination(newPage) {
        page.value = newPage;
        fetchBooks();
    }

    function updateCategory(newCat) {
        selectedCategories.value = newCat;
        fetchBooks();
    }

    function updateSearch(newVal) {
        if (newVal.key === 'title') {
            title.value = newVal.value;
            author.value = ''; // Use empty string instead of null
        } else if (newVal.key === 'author') {
            author.value = newVal.value;
            title.value = ''; // Use empty string instead of null
        }
        fetchBooks();
    }

    // Fetch categories and books when the component is mounted
    onMounted(async () => {
        const query = useRoute().query;
        if(query.searchKey) {
            title.value = query.searchKey
            locale.value === 'ar' ? router.replace({ path: '/books'}) : router.replace({ path: '/en/books'})
        }
        headers.value = API_HEADER(); // Set headers in the setup context
        try {
            await fetchCategories();
        } catch (error) {
            console.error('Error during onMounted fetch:', error);
        }
    });
</script>
