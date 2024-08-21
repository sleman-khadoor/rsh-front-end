<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 bg-primary rounded-4 py-5 px-4 text-dark-blue">
            <div class="row px-3">
                <div class="col col-auto px-0 mx-auto justify-content-center font-meduim lh-25 mb-5 mx-2 w-35per">
                <!-- <div class="col col-auto px-0 mx-auto justify-content-center font-meduim lh-25 mb-5"> -->
                    <!-- <div :style="`background: url(${url + book.cover_image})`" class="bg-img my-3"></div> -->
                    <img :src="url + book.cover_image" class="d-block mx-auto mb-2 bg-img object-fit-fill" :alt="book.title">
                    <div class="details-box mx-auto">
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1">
                        <img src="/icon/categories.svg" class="d-block my-auto mr-2" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.categories')}}: &nbsp;
                        <span v-for="category in book.book_categories" class="badge text-dark-blue bg-secondary font-small ff-regular m-1"> {{category.title}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1">
                        <img src="/icon/calendar.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                       {{$t('books.year')}}: &nbsp;<span class="font-small ff-regular"> {{book.printing_year}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1">
                        <img src="/icon/format.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.format')}}: &nbsp;
                        <span v-for="format in book.book_formats" class="badge text-dark-blue bg-secondary font-small ff-regular m-1">{{format.title}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1">
                        <img src="/icon/code.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.ISBN')}}: &nbsp; <span class="font-small ff-regular"> {{book.ISBN}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim mb-1">
                        <img src="/icon/code.svg" class="d-block my-auto" alt="..." width="20" height="20">&nbsp;
                        {{$t('books.EISBN')}}: &nbsp; <span class="font-small ff-regular" > {{book.EISBN}}</span>
                    </div>
                    <div class="d-flex flex-wrap align-items-center ff-meduim my-4">
                        <a target="_blank" :href="store" style="text-decoration: none !important;">
                        <button class="btn btn-primary p-2 border-0 font-meduim ff-regular h-50px bg-choco w-100 d-flex flex-wrap justify-content-center px-2">
                            <img src="/icon/shop-add.svg" class="d-block my-auto mx-2" alt="..." width="27" height="27">
                            <span class="m-auto">{{$t('books.store')}}</span>
                            <img v-if="locale == 'ar'" src="/icon/shop-arrows.svg" class="d-block my-auto mx-2" alt="..." width="27" height="27" style="transform: rotate(180deg)">
                            <img v-else src="/icon/shop-arrows.svg" class="d-block my-auto" alt="..." width="27" height="27" >
                        </button>
                        </a>
                    </div>
                    </div>

                </div>
                <!-- <div class="col px-4"> -->
                <div class="col mx-4 w-65per">
                    <div class="font-x-large ff-meduim mb-3 mt-3">{{book.title}}</div>
                    <div class="d-flex mb-3">
                        <img src="/icon/author-name.svg" class="d-block my-auto" alt="..." width="20" height="20">
                        <span class="font-meduim ff-regular text-choco mx-1">{{book.author?.name}}</span>
                    </div>
                    <div class="font-small ff-regular lh-30 mb-4 text-justify">
                        {{book.abstract}}
                    </div>
                    <div v-if="book.book_reviews && book.book_reviews.length">
                        <div class="d-flex align-items-center mb-3">
                            <img src="/icon/star.svg" class="d-block my-auto" alt="..." width="30" height="30">
                            <span class="font-large ff-regular text-choco mx-1">{{$t('books.reviews.title')}}</span>
                        </div>
                        <div v-for="review in book.book_reviews" class="mb-2">
                        <div class="font-small ff-regular text-grey mb-2 lh-25 font-italic">
                            {{review.review}}
                        </div>
                        <div class="font-small ff-bold mb-3">
                            <i>{{review.username}}</i>
                        </div>
                        </div>
                    </div>
                    <div v-if="book.book_awards && book.book_awards.length">
                        <div class="d-flex align-items-center mb-3 pt-2">
                            <img src="/icon/medal-star.svg" class="d-block my-auto" alt="..." width="25" height="25">
                            <span class="font-large ff-regular text-choco mx-1">{{$t('books.awards.title')}}</span>
                        </div>
                        <div>
                            <ul>
                                <li v-for="award in book.book_awards" class="font-meduim mb-2">
                                    {{award.title}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row p-0 pb-5 m-0 px-lg-0 px-md-5">
                <BooksAuthor :author="book.author"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';
import { useHead } from '@unhead/vue'
const { slug } = useRoute().params;
const { locale } = useI18n();
const url = ref(baseURL);
const runTimeConfig = useRuntimeConfig();
const setI18nParams = useSetI18nParams();
const switchLocalePath = useSwitchLocalePath();

definePageMeta({
  lazy: true
})

const { data: book, pending: bookPending, refresh: bookRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/books/${slug}`, {
        transform: (_book) => _book.data,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
            setI18nParams({
                en:  { slug: response._data.data.slug.en} , // slug: 'red-mug'
                ar:  { slug: response._data.data.slug.ar}  // slug: 'rode-mok'
            })
            switchLocalePath('en') // /products/red-mug
            switchLocalePath('ar') // /nl/products/rode-mok
        },
});

const { data: store } = await useFetch(`${runTimeConfig.public.API_URL}/contacts`, {
        transform: (_store) => _store.data?.[0].value,
        headers: API_HEADER(),
        onResponse({ request, response, options }) {
            // Process the response data
           
        },
});


watch(() => book.value, (newBook) => {
  if (newBook && newBook.title) {
    useHead({
      title: locale.value === 'ar' 
        ? `${newBook.title} | رشم`
        : `${newBook.title} | Rashm`,
      meta: [
        { 
          name: 'description', 
          content: locale.value === 'ar' 
            ? `اكتشف تفاصيل كتاب ${newBook.title} في مكتبة رشم. ${newBook.abstract}`
            : `Discover details about the book ${newBook.title} at Rashm Library. ${newBook.abstract}`
        },
        { 
          name: 'keywords', 
          content: locale.value === 'ar' 
            ? `${newBook.title}, كتب, مكتبة, مؤلفات, كتب عربية, كتب إنجليزية, رشم`
            : `${newBook.title}, books, library, literature, Arabic books, English books, Rashm`
        }
      ],
      link: [
            { rel: 'canonical', href: computed(() => `https://rashm.com.sa/books/${slug}`)  }
      ]
    });
  }
}, { immediate: true });
const computedStyle = computed(() => {
    let style = ''
    if(locale.value == 'ar') {
        style = 'transform: rotate(180deg)';
    }
    return style
});

onMounted(() => {
  if (process.client) {
    url.value = baseURL;
  }
});
</script>
<style scoped>
.badge {
    border-radius: 7px !important;
}
.bg-img {
  background-repeat: no-repeat;
    background-position: top center;
    /* min-height: 450px; */
    height: 60%;
    /* min-width: 300px; */
    width: 100%;
    background-size: cover !important;
    background-position: center !important;
    overflow: hidden;
}
.w-65per {
    width: 70%;
}
.w-35per {
    width: 30%;
}
@media only screen and (max-width: 1100px) {
    .w-65per {
        width: 60%;
    }
    .w-35per {
        width: 40%;
    }
    .bg-img {
        width: 90%;
    }
    .details-box {
        width: 90%;
    }
}
@media only screen and (max-width: 900px) {
    .w-65per {
        width: 55%;
    }
    .w-35per {
        width: 45%;
    }
    .bg-img {
        width: 95%;
    }
    .details-box {
        width: 95%;
    }
}
@media only screen and (max-width: 828px) {
    .w-65per {
        width: 100%;
    }
    .w-35per {
        width: 100%;
    }
    .bg-img {
        width: 70%;
    }
    .details-box {
        width: 70%;
    }
}
</style>
