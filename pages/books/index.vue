<template>
    <div>
        <Title>Books with Rashm</Title>
        <Meta name="description" content="Books with Rashm" />
        <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search @search="updateSearch($event)"/>
            </div>
        </div>
        <div class="row bg-secondary p-1">
            <CategoriesCarousel v-if="!categoriesPending" :categories="categories" @updateCategory="updateCategory($event)"/>
        </div>
        <div class="row bg-secondary px-5 pb-5 pt-2 justify-content-around">
            <div v-for="(book,i) in books?.data" :key="i" class="col mx-1">
                <BooksCard :book="book"/>
            </div>
        </div>
        <div class="row bg-secondary justify-content-center pb-5">
            <Pagination v-if="!booksPending" :meta="books?.meta" @updatePage="updatePagination($event)"/>
        </div>
    </div>
</template>
<script setup>
    const runTimeConfig = useRuntimeConfig();
    const page = ref(1);
    const category = ref(1);
    const title = ref('');
    const author = ref('');
    //get categories
    const { data: categories, pending: categoriesPending, refresh: categoriesRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/book-categories`, {
        transform: (_categories) => _categories.data,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
            category.value = response._data.data[0].id;
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
            console.log('request error', response)
        },
        onResponseError({ request, response, options }) {
            console.log('response error', response)
        }
    });
    //get books
    const { data: books, pending: booksPending, refresh: booksRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/books`, {
        headers: API_HEADER(),
        query: { 
            page,
            include: ['author'],
            'filter[book_category][0]': category,
            'filter[title]': title,
            'filter[author]': author
        },
        onResponse({ request, response, options }) {
            // Process the response data
            console.log('request', response)
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
            console.log('request error', response)
        },
        onResponseError({ request, response, options }) {
            console.log('response error', response)
        }
    });
    function updatePagination(newPage) {
        page.value = newPage;
        booksRefresh();
    };
    function updateCategory(newCat) {
        category.value = newCat.id;
        booksRefresh();
    };
    function updateSearch(newVal) {
        if(newVal.key === 'title') {
            title.value = newVal.value;
            author.value = null;
        }
        if(newVal.key === 'author') {
            author.value = newVal.value;
            title.value = null;
        }
        booksRefresh();
    };
</script>