<template>
    <div id="home" class="bg-secondary">
            <div class="row mt-2 px-2">
                <div class="col-lg-6 col-md-6 col-sm-12 mb-4" style="padding-right: 0.4%;padding-left: 0.4%;">
                    <IndexCarousel :news="news"/>
                </div>
            
                <div class="col-lg-6 col-md-6 col-sm-12 mb-4" style="padding-left: 0.4%;padding-right: 0.4%;">
                    <div class="d-flex mb-auto text-center h-100 rounded-4  bg-img">
                        <div class="p-3">
                            <div class="text-choco font-xx-large ff-bold pb-3 pt-3">{{t('index.title')}}</div>
                            <div class="text-dark-blue font-meduim ff-regular py-2 px-lg-5 px-md-4 px-sm-3 lh-30">
                                {{t('index.introduction')}}
                            </div>
                            <div class="mx-auto pt-2 pb-lg-3 pb-md-3 pb-sm-7">
                                <Search :dropdown="false"/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
             <div class="d-flex m-0 justify-content-center">
                <a href="#latestDepartments">
                    <button class="bg-btn-img m-1 rounded-5 border-0 float my-auto"></button>
                </a>
            </div>
            <div class="row align-items-stretch">
                <div ref="relativeCol" class="col-lg-8 col-md-6 col-sm-12 mb-3" style="height: fit-content;">
                    <div class="rounded-3 bg-dark-blue text-primary px-lg-5 px-md-2 px-sm-1 py-2 mb-4">
                        <div class="p-4 font-x-large ff-regular lh-40"> {{t('index.rashmHistory1')}} <span class="text-choco">{{t('index.rashmHistory2')}}</span>{{t('index.rashmHistory3')}}</div>
                    </div>
                    <IndexHistory :data="history" :bgColor="'bg-secondary'" :mb="false" :withTitle="false" :col="'col-12'"/>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mb-1">
                    <img src="/img/printer.webp" class="d-block w-100" alt="rashm printer" :height="imgHeight" width="400">
                </div>
            </div>
            <div id="latestDepartments" class="row mb-2">
                <IndexDiverseServices/>
            </div>
            <div v-if="!booksPending && !booksError && (books && books.length)"  class="row mb-2 pb-1 m-0">
                <ColourfullDiv :text="$t('index.checkoutLatestBooks')" :bgColor="'bg-choco'"/>
            </div>
            <div v-if="!booksPending && !booksError && (books && books.length)" class="row mb-4 m-0">
                <IndexMultiCarousel :books="books"/>
            </div>
            <div v-if="!blogsPending && !blogsError && (blogs && blogs.length)" class="row mb-4">
                <IndexBlogs :blogs="blogs"/>
            </div>
        </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { API_HEADER } from '@/utils/global';

// Get runtime configuration
const runTimeConfig = useRuntimeConfig();
const { t, locale } = useI18n();

const history = ref([
  { text: t('index.history.history1') },
  { text: t('index.history.history2') },
  { text: t('index.history.history3') },
]);

const blogs = ref([]);
const blogsPending = ref(false);
const blogsError = ref(null);
const news = ref([]);
const newsPending = ref(false);
const newsError = ref(null);
const books = ref([]);
const booksPending = ref(false);
const booksError = ref(null);
const title = ref('');
const relativeCol = ref(null);
const imgHeight = ref(300);

const headers = ref({});
// Define meta tags content based on the current locale
const pageTitle = computed(() => {
  return locale.value === 'ar'
    ? 'رشم'
    : 'Rashm';
});

const pageDescription = computed(() => {
  return locale.value === 'ar'
    ? 'استكشف أحدث الأخبار والخدمات والكتب والمدونات على موقع رشم. اكتشف كل ما هو جديد في عالم الكتب والخدمات معنا.'
    : 'Explore the latest news, services, books, and blogs on Rashm. Discover what’s new in the world of books and services with us.';
});

const pageKeywords = computed(() => {
  return locale.value === 'ar'
    ? 'رشم, أخبار, خدمات, كتب, مدونات'
    : 'Rashm, News, Services, Books, Blogs';
});

// Fetch data function
const fetchData = async (url, dataRef, pendingRef, errorRef, queryParams) => {
  pendingRef.value = true;
  errorRef.value = null;

  try {
    const response = await $fetch(`${runTimeConfig.public.API_URL}/${url}`, {
      headers: headers.value,
      query: {
        ...queryParams
      }
    });
    dataRef.value = response.data;
  } catch (error) {
    errorRef.value = error;
    console.error(`Error fetching ${url}:`, error);
  } finally {
    pendingRef.value = false;
  }
};
const updateImgValue = () => {
    imgHeight.value =  relativeCol.value?.offsetHeight
};
// Fetch data on component mount
onMounted(async () => {
  headers.value = API_HEADER(); // Set headers in the setup context
  try {
    await fetchData('news', news, newsPending, newsError, {
        perPage: 5,
    });
    updateImgValue();
    await fetchData('books', books, booksPending, booksError, {
        perPage: 9,
    });
    await fetchData('blogs', blogs, blogsPending, blogsError, {
        perPage: 6,
    });
  } catch (error) {
    console.error('Error during onMounted fetch:', error);
  }
  window.addEventListener('resize', updateImgValue)
});

useHead({
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDescription.value },
    { name: 'keywords', content: pageKeywords.value }
  ],
  link: [
    { rel: 'canonical', href: 'https://rashm.com.sa/' }
  ]
});
</script>
<style scoped>
#home {
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
}
.float{
	position: relative;
    display: flex;
    z-index: 2;
    width: 70px;
    height: 70px;
    margin-top: -93px !important;
}
[dir="ltr"] .bg-img{
    background-image: url( '/svg/Square.svg' );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}
[dir="rtl"] .bg-img{
    background-image: url( '/svg/Square-ar.svg' );
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}
.bg-btn-img{
    background-image: url( '/svg/Button.svg' );
    background-repeat: no-repeat;
    background-size: cover;
}
.pb-sm-7{
    padding-bottom: 4rem !important;
}
</style>