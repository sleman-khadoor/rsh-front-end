<template>
    <div id="home" class="bg-secondary">
        <Head>
            <Title>Rashm</Title>
            <Meta name="description" content="Rasham" />
        </Head>
            <div class="row mt-2 px-2">
                <div class="col-lg-6 col-md-6 col-sm-12 mb-4" style="padding-right: 0.4%;padding-left: 0.4%;">
                    <IndexCarousel :news="news"/>
                </div>
            
                <div class="col-lg-6 col-md-6 col-sm-12 mb-4" style="padding-left: 0.4%;padding-right: 0.4%;">
                    <div class="d-flex mb-auto text-center h-100 rounded-4  bg-img">
                        <div class="p-3">
                            <div class="text-choco font-xx-large ff-bold pb-2 pt-3">Rashm</div>
                            <div class="text-dark-blue font-large ff-regular py-2 px-lg-5 px-md-4 px-sm-3">
                                With Rashm Cultural, we combine creative translation
                                with careful editing, give life to your texts through
                                linguistic proofreading, and pave the way for authors
                                with literary agency and professional marketing, to
                                connect you to your audience by writing
                                unique content.
                            </div>
                            <div class="mx-auto pt-2 pb-lg-3 pb-md-3 pb-sm-7">
                                <Search/>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
             <div class="d-flex m-0 justify-content-center">
                <a href="#latestBooks">
                    <button class="bg-btn-img m-1 rounded-5 border-0 float my-auto"></button>
                </a>
            </div>
            <div class="row mb-4">
                <div class="col-lg-8 col-md-6 col-sm-12">
                    <div class="rounded-3 bg-dark-blue text-primary px-lg-5 px-md-2 px-sm-1 pt-3 pb-3 mb-3">
                        <div class="p-5 font-x-large ff-regular"> Explore <span class="text-choco">Rashm's</span> history and our vision of providing </div>
                    </div>
                    <IndexHistory :data="history" :bgColor="'bg-secondary'" :withTitle="false" :col="'col-12'"/>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <img src="/img/printer.webp" class="d-block w-100" alt="..." height="400" width="400">
                </div>
            </div>
            <div class="row mb-4">
                <IndexDiverseServices/>
            </div>
            <div class="row mb-4 pb-4 m-0" id="latestBooks">
                <ColourfullDiv :text="$t('index.checkoutLatestBooks')" :bgColor="'bg-choco'"/>
            </div>
            <div v-if="!booksPending" class="row mb-4 m-0">
                <IndexMultiCarousel :books="books"/>
            </div>
            <div v-if="blogsPending">Loading...</div>
            <div v-else-if="blogsError">Error loading blogs: {{ blogsError.message }}</div>
            <div v-else class="row mb-4">
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
const { t } = useI18n();

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

const headers = ref({});

// Fetch data function
const fetchData = async (url, dataRef, pendingRef, errorRef) => {
  pendingRef.value = true;
  errorRef.value = null;

  try {
    const response = await $fetch(`${runTimeConfig.public.API_URL}/${url}`, {
      headers: headers.value,
    });
    dataRef.value = response.data;
  } catch (error) {
    errorRef.value = error;
    console.error(`Error fetching ${url}:`, error);
  } finally {
    pendingRef.value = false;
  }
};

// Fetch data on component mount
onMounted(async () => {
  headers.value = API_HEADER(); // Set headers in the setup context
  try {
    await fetchData('news', news, newsPending, newsError);
    await fetchData('books', books, booksPending, booksError);
    await fetchData('blogs', blogs, blogsPending, blogsError);
  } catch (error) {
    console.error('Error during onMounted fetch:', error);
  }
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
    width: 70px;
    height: 70px;
    margin-top: -93px !important;
}
.bg-img{
    background-image: url( '/svg/Square.svg' );
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