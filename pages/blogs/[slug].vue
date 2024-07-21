<template>
    <div class="row bg-secondary m-0">
        <Title>Blog name with Rashm</Title>
        <Meta name="description" content="Blog Name with Rashm" />
        <div class="col-12 mx-auto text-start rounded-4 py-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <img :src="blog.cover_image" class="d-block w-100 object-fit-cover mb-3" alt="..." height="310">
            <div class="d-flex flex-wrap mb-3">
                <span v-for="cat in blog.blog_categories" class="badge text-choco bg-dark-snow font-small ff-regular m-1">{{cat.title}}</span>
            </div>
            <div class="mb-3">
                <div class="d-flex justify-content-between mb-2">
                    <span class="font-large ff-meduim">{{blog.title}}</span>
                    <span class="font-small ff-regular">Monady At {{blog.date}}</span>
                </div>
                <div class="mb-1">
                    <span class="font-meduim ff-regular text-choco">{{blog.writer}}</span>
                </div>
                <div>
                    <p class="text-grey font-meduim ff-regular lh-22">
                    {{blog.content}}
                    </p>
                </div>
            </div>
            <div>
                <span class="font-large ff-meduim">Similar Blogs</span>
                <div class="row justify-content-center">
                    <div v-for="(blog,i) in blogs" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                        <BlogsCard :blog="blog"/>
                    </div>
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
const { data: blog, pending: blogPending, refresh: blogRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/blogs/${slug}`, {
        transform: (_blog) => _blog.data,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
            console.log('request', response)
             setI18nParams({
                en:  { slug: response._data.data.slug.en} , // slug: 'red-mug'
                ar:  { slug: response._data.data.slug.ar}  // slug: 'rode-mok'
            })
            switchLocalePath('en') // /products/red-mug
            switchLocalePath('ar') // /nl/products/rode-mok
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