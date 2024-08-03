<template>
    <div class="row bg-secondary m-0">
        <Title>{{book.title}}</Title>
        <Meta name="description" content="Book name with Rashm" />
        <div class="col-11 mx-auto my-5 bg-primary rounded-4 pt-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <div class="row">
                <div class="col col-auto px-0 mx-auto justify-content-center font-meduim lh-25 mb-5">
                    <img :src="url + book.cover_image" class="d-block mx-auto mb-2" :alt="book.title" height="340" width="280">
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        <img src="/icon/categories.svg" class="d-block my-auto mr-2" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.categories')}}: &nbsp;
                        <span v-for="category in book.book_categories" class="badge text-dark-blue bg-secondary font-small ff-regular m-1"> {{category.title}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        <img src="/icon/calendar.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                       {{$t('books.year')}}: &nbsp;<span class="font-small ff-regular"> {{book.printing_year}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        <img src="/icon/format.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.format')}}: &nbsp;
                        <span class="badge text-dark-blue bg-secondary font-small ff-regular mx-1"> Paperback</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        <img src="/icon/code.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.ISBN')}}: &nbsp; <span class="font-small ff-regular"> {{book.ISBN}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1"  style="width: 280px;">
                        <img src="/icon/code.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.EISBN')}}: &nbsp; <span class="font-small ff-regular" > {{book.EISBN}}</span>
                    </div>
                </div>
                <div class="col px-4">
                    <div class="font-x-large ff-meduim mb-3 mt-3">{{book.title}}</div>
                    <div class="d-flex mb-3">
                        <img src="/icon/author-name.svg" class="d-block my-auto" alt="..." width="20" height="20">
                        <span class="font-meduim ff-regular text-choco mx-1">{{book.author?.name}}</span>
                    </div>
                    <div class="font-small ff-regular lh-30 mb-4">
                        {{book.abstract}}
                    </div>
                    <div class="d-flex align-items-center mb-3">
                        <img src="/icon/star.svg" class="d-block my-auto" alt="..." width="30" height="30">
                        <span class="font-large ff-regular text-choco mx-1">{{$t('books.reviews.title')}}</span>
                    </div>
                    <div v-for="review in book.book_reviews">
                    <div class="font-small ff-regular text-grey mb-2 lh-25">
                        {{review.text}}
                    </div>
                    <div class="font-meduim ff-bold mb-3">
                        {{review.user_name}}
                    </div>
                    </div>
                    <div class="d-flex align-items-center mb-3 pt-2">
                        <img src="/icon/medal-star.svg" class="d-block my-auto" alt="..." width="25" height="25">
                        <span class="font-large ff-regular text-choco mx-1">{{$t('books.awards.title')}}</span>
                    </div>
                    <div>
                        <ul>
                            <li v-for="award in book.book_awards"> {{award}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row p-0 pb-5">
                <BooksAuthor :author="book.author"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';
const { slug } = useRoute().params;
const url = ref(baseURL);
const runTimeConfig = useRuntimeConfig();
const setI18nParams = useSetI18nParams();
const switchLocalePath = useSwitchLocalePath();
const { data: book, pending: bookPending, refresh: bookRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/books/${slug}`, {
        transform: (_book) => _book.data,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
            console.log('request', response._data)
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

onMounted(() => {
  if (process.client) {
    url.value = baseURL;
  }
});
</script>
<style scoped>
.badge {
    border-radius: 0 !important;
}
</style>
