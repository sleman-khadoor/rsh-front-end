<template>
    <div id="authorsCarouselExample" class="carousel author-slider px-5" data-bs-ride="carousel">
    <div class="carousel-inner w-90 m-auto" ref="carouselInner">
        <!-- <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]"> -->
        <div class="d-flex justify-content-around align-content-stretch">
            <div v-for="(author, subIndex) in authors" :key="subIndex" style="height: inherit !important" class="carousel-image carousel-item rounded-4  mx-1">
                <div class="author-card shadow-sm bg-bg-secondary h-100">
                     <img :src="url + author.avatar" class="img-border" alt="Author Image" height="100" width="100">
                     <h5 class="mt-2 text-dark-blue font-meduim ff-meduim">{{author.name}}</h5>
                     <p class="m-0 font-x-small ff-regular lh-22">
                         {{author.about}}
                     </p>
                 </div>
            </div>            
        </div>
        <!-- </div> -->
    </div>
    <button class="carousel-control-prev px-4" :disabled="page === 1" @click="getPage('prev')" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
       <img src="/icon/cat-prev.svg" class="d-block" alt="..." width="42" height="42" style=" transform: rotate(180deg); ">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next px-4" :disabled="nextFlag" @click="getPage('next')" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <img src="/icon/cat-next.svg" class="d-block" alt="..." width="42" height="42">
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script>
import { baseURL } from '@/utils/global';
export default defineComponent({
    setup() {
      const test = ref(0);
      const page = ref(1);
      const perPage = ref(0);
      const total = ref(1);
      const url = ref(baseURL);
      const headers = ref({});
      const authors = ref([]);
      const authorsPending = ref(true);
      const authorsError = ref(null);
       const images = ref(authors);
      const chunks = ref([]);
      const createChunks = () => {
        const width = window.innerWidth
        let imagesPerSlide

        if (width >= 1120) {
          imagesPerSlide = 4
          perPage.value = 4
        } else if (width >= 992) {
          imagesPerSlide = 3
          perPage.value = 3
        } else if (width >= 768) {
          imagesPerSlide = 2
          perPage.value = 2
        } else {
          imagesPerSlide = 1
          perPage.value = 1
        }
        chunks.value = []
        // fetchAuthors()
        // for (let i = 0; i < authors.value.length; i += imagesPerSlide) {
        //   console.log('test carousel : ', authors.value);
        //   console.log('test carousel 2 : ', authors.value.slice(i, i + imagesPerSlide));
        //   chunks.value.push(authors.value.slice(i, i + imagesPerSlide));
        //   console.log('test carousel 3 : ', chunks);
        // }
      };
      const runTimeConfig = useRuntimeConfig();
      // Function to fetch authors
      async function fetchAuthors() {
          try {
              const response = await $fetch(`${runTimeConfig.public.API_URL}/represented-authors`, {
                  headers: headers.value,
                  query: {
                    page: page.value,
                    perPage: perPage.value
                  }
              });
              console.log('object authors', response);
              authors.value = response.data;
              total.value = response.meta.total;
          } catch (error) {
              authorsError.value = error;
              console.error('Error fetching authors:', error);
          } finally {
              authorsPending.value = false;
          }
      };
      const nextFlag = computed(() => {
        return page.value === (total.value/4)
      })
      function getPage(type) {
        if(type === 'next' && page.value !== (total.value/4)) {
          page.value += 1
          fetchAuthors()
        } else if(type === 'prev' && page.value !== 1) {
          page.value -= 1;
          fetchAuthors()
        }
      }
      watchEffect((perPage) => {
        fetchAuthors()
      })
      onMounted(async () => {
        if (process.client) {
          url.value = baseURL;
        }
        createChunks()
        headers.value = API_HEADER(); // Set headers in the setup context
        try {
            await fetchAuthors();
        } catch (error) {
            console.error('Error during onMounted fetch:', error);
        }
        
        window.addEventListener('resize', createChunks)
      });

      watch(images, createChunks);
      return {
          chunks,
          url,
          getPage,
          nextFlag,
          page,
          authors
      }
    },
});
</script>
<style scoped>
#authorsCarouselExample{
  direction: ltr;
}
.carousel-inner {
      display: flex;
    }

    

    .carousel-image img {
      /* width: 100%; */
      /* height: auto; */
      border-radius: 5px; /* Optional: Add border-radius to images */
    }
    .author-slider .carousel-control-prev, .carousel-control-next{
      width: 4% !important;
    }

    .author-card {
            /* min-width: 247px; */
            min-height: 241px;
            margin: auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #f8f9fa;
            text-align: center;
            margin-top: 60px;
    }
    .author-card img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            position: relative;
            margin-top: -60px;
    }
    .author-card h5 {
            margin-top: 15px;
            margin-bottom: 10px;
    }
    .author-card p {
            font-size: 0.9rem;
            color: #6c757d;
    }
    .carousel-indicators {
            margin-bottom: -2.5rem !important;
    }
    .carousel-indicators [data-bs-target]{
        background-color: #0B294A;
    }
    .img-border {
      border: 2px solid #82704A;
    }
/* @media only screen and (max-width: 1120px) {
.carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    flex: 0 0 23%;
    display: block;
  }
} */
@media only screen and (min-width: 1120px) {
.carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    flex: 0 0 23% !important;
    display: block;
  }
}
@media only screen and (max-width: 1120px) {
.carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    flex: 0 0 32% !important;
    display: block;
  }
}
@media only screen and (max-width: 992px) {
.carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    flex: 0 0 40% !important;
    display: block;
  }
}
@media only screen and (max-width: 768px) {
.carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    flex: 0 0 70% !important;
    display: block;
  }
}
</style>