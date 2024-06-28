<template>
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner w-75 m-auto" ref="carouselInner">
        <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="d-flex justify-content-center">
            <div v-for="(image, subIndex) in chunk" :key="subIndex" class="carousel-image col-lg-3 col-md-4 col-md-6">
            <img :src="`/_nuxt/assets/img/${image.iconSrc}.jpg`" width="150" height="200" class="d-block" alt="...">
            </div>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <img src="@/assets/icon/carousel-prev.svg" class="d-block" alt="..." width="32" height="32">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <img src="@/assets/icon/carousel-next.svg" class="d-block" alt="..." width="32" height="32">
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script>
export default defineComponent({
    props: ['books'],
    setup(props) {
      const images = ref(props.books);
      const chunks = ref([]);
      const createChunks = () => {
        const width = window.innerWidth
        let imagesPerSlide

        if (width >= 992) {
          imagesPerSlide = 5
        } else if (width >= 768) {
          imagesPerSlide = 3
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
</style>