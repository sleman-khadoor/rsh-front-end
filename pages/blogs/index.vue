<template>
    <div>
        <NuxtLoadingIndicator/>
        <Title>Blogs with Rashm</Title>
        <Meta name="description" content="Blogs with Rashm" />
        <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search @search="updateSearch($event)"/>
            </div>
        </div>
        <div class="row bg-secondary p-1">
            <CategoriesCarousel v-if="!categoriesPending" :categories="categories" @updateCategory="updateCategory($event)"/>
        </div>
        <div class="row bg-secondary px-5 pb-5 pt-2 justify-content-center">
            <div v-for="(blog,i) in blogs?.data" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                <BlogsCard :blog="blog"/>
            </div>
        </div>
        <div class="row bg-secondary justify-content-center pb-5">
            <Pagination v-if="!blogsPending" :meta="blogs?.meta" @updatePage="updatePagination($event)"/>
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
    const { data: categories, pending: categoriesPending, refresh: categoriesRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/blog-categories`, {
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
    //get blogs
    const { data: blogs, pending: blogsPending, refresh: blogsRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/blogs`, {
        headers: API_HEADER(),
        query: { page, 'filter[blog_category][0]': category, 'filter[title]': title, 'filter[author]': author},
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
        blogsRefresh();
    };
    function updateCategory(newCat) {
        category.value = newCat.id;
        blogsRefresh();
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
        blogsRefresh();
    };
</script>