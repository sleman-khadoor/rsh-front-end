<template>
    <div id="carouselExample" class="carousel slide book-slider" data-bs-ride="carousel">
    <div class="carousel-inner w-95 m-auto" ref="carouselInner">
        <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="d-flex justify-content-center py-4">
            <div v-for="(image, subIndex) in chunk" :key="subIndex" class="carousel-image m-auto col-lg-3 col-md-4 col-md-6">
            <img :src="image.cover_image" width="196" height="254" class="d-block mx-auto img-shadow" :alt="image.title">
            </div>
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <img src="/icon/carousel-prev.svg" class="d-block" alt="..." width="42" height="42">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <img src="/icon/carousel-next.svg" class="d-block" alt="..." width="42" height="42">
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

        if (width >= 1120) {
          imagesPerSlide = 5
        } else if (width >= 992) {
          imagesPerSlide = 4
        } else if (width >= 768) {
          imagesPerSlide = 3
        } else {
          imagesPerSlide = 1
        }
        chunks.value = []
        for (let i = 0; i < images.value.length; i += imagesPerSlide) {
          chunks.value.push(images.value.slice(i, i + imagesPerSlide));
        }
      };
      onMounted(() => {
        createChunks()
        window.addEventListener('resize', createChunks)
      });
      // onUnmounted(() => {
      //   createChunks()
      //   window.addEventListener('resize', createChunks)
      // });

      watch(images, createChunks);
      return {
          chunks
      }
    },
});
</script>

<style scoped>
#carouselExample{
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
.book-slider .carousel-control-prev, .carousel-control-next{
    width: 4% !important;
}
.img-shadow {
    -webkit-box-shadow: 75px 75px 10px -80px rgba(0,0,0,0.75);
    -moz-box-shadow: 75px 75px 10px -80px rgba(0,0,0,0.75);
    box-shadow: 75px 75px 10px -80px rgba(0,0,0,0.75);
}
.w-95 {
 width: 95%; 
}
</style>