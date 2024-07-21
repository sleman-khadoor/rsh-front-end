<template>
    <div class="row bg-secondary m-0">
        <Title>{{author.name}}</Title>
        <Meta name="description" content="Author name with Rashm" />
        <div class="col-11 mx-auto mt-5 bg-primary text-start rounded-4 pt-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <div class="row p-0 pb-5 px-4">
                <BooksAuthor :author="author"/>
            </div>
        </div>
        <div class="col-11 mx-auto my-4 bg-primary text-start rounded-4 pt-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center px-4">Writer's Publications</div>
            <div class="row p-0 pb-5 px-4 justify-content-around">
                <div v-for="(book,i) in books" :key="i" class="col mx-1">
                    <BooksCard :book="book"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { slug } = useRoute().params;
const runTimeConfig = useRuntimeConfig();
const setI18nParams = useSetI18nParams();
const switchLocalePath = useSwitchLocalePath();
const authorName = ref('');
const { data: author, pending: authorPending, refresh: authorRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/represented-authors/${slug}`, {
        transform: (_author) => _author.data,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
            console.log('request', response._data.data.name)
            setI18nParams({
                en:  { slug: response._data.data.slug.en} , // slug: 'red-mug'
                ar:  { slug: response._data.data.slug.ar}  // slug: 'rode-mok'
            })
            switchLocalePath('en') // /products/red-mug
            switchLocalePath('ar') // /nl/products/rode-mok
            authorName.value = response._data.data.name;
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
        transform: (_books) => _books.data,
        query: {
            include: ['author'],
            'filter[author]': authorName
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
</script>