<template>
    <div id="authorsCarouselExample" class="carousel slide author-slider" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button @click="test = index" v-for="(chunk, index) in chunks" :key="index" type="button" :class="(index === 0) ? 'active' : null" data-bs-target="#authorsCarouselExample" :data-bs-slide-to="index" :aria-current="(index === test)" :aria-label="`Slide ${index}`"></button>
        </div>
    <div class="carousel-inner w-90 m-auto" ref="carouselInner">
        <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="d-flex justify-content-around align-content-stretch" style="min-height: 55vh">
            <div v-for="(author, subIndex) in chunk" :key="subIndex" style="height: inherit !important" class="carousel-image rounded-4 col-lg-3 col-md-4 col-md-6">
               <NuxtLink :to="localePath(`/departments/literaryAgencyAuthors/${getSlugByLang(author?.slug)}`)" style="text-decoration: unset">
                <div class="author-card shadow-sm bg-bg-secondary h-100">
                     <img :src="author.avatar" class="img-border" alt="Author Image" height="100" width="100">
                     <h5 class="mt-2 text-dark-blue font-meduim ff-meduim">{{author.name}}</h5>
                     <p class="m-0 font-x-small ff-regular">
                         {{author.about}}
                     </p>
                 </div>
                 </NuxtLink>
            </div>            
        </div>
        </div>
    </div>
    </div>
</template>
<script>
export default defineComponent({
    props: ['authors'],
    setup(props) {
      const test = ref(0);
      const images = ref(props.authors);
      const chunks = ref([]);
      const createChunks = () => {
        const width = window.innerWidth
        let imagesPerSlide

        if (width >= 1120) {
          imagesPerSlide = 4
        } else if (width >= 992) {
          imagesPerSlide = 3
        } else if (width >= 768) {
          imagesPerSlide = 2
        } else {
          imagesPerSlide = 1
        }
        chunks.value = []
        for (let i = 0; i < images.value.length; i += imagesPerSlide) {
          console.log('test carousel : ', images.value);
          console.log('test carousel 2 : ', images.value.slice(i, i + imagesPerSlide));
          chunks.value.push(images.value.slice(i, i + imagesPerSlide));
          console.log('test carousel 3 : ', chunks);
        }
      };
      onMounted(() => {
        createChunks()
        window.addEventListener('resize', createChunks)
      });

      watch(images, createChunks);
      return {
          chunks
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

    .carousel-item {
      width: 100%; /* Ensure each slide takes full width */
    }

    .carousel-image {
      flex: 0 0 18%; /* Adjust the width of each image container as needed */
      margin-right: 10px; /* Add space between images */
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
            min-width: 247px;
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
</style>