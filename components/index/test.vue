<template>
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" :class="{ active: index === 0 }" v-for="(chunk, index) in chunkedImages" :key="index">
        <div class="row">
          <div class="col" v-for="image in chunk" :key="image.src">
            <img :src="`/_nuxt/assets/img/${image.src}.jpg`" width="194" height="252" class="d-block w-100" :alt="image.alt">
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: 'book', alt: 'Image 1' },
        { src: 'book', alt: 'Image 2' },
        { src: 'book', alt: 'Image 3' },
        { src: 'book', alt: 'Image 4' },
        { src: 'book', alt: 'Image 5' },
        { src: 'book', alt: 'Image 6' },
        { src: 'book', alt: 'Image 7' },
        { src: 'book', alt: 'Image 8' },
        { src: 'book', alt: 'Image 9' },
        { src: 'book', alt: 'Image 10' },
        // Add more images as needed
      ],
      currentIndex: 0
    };
  },
 computed: {
    chunkedImages() {
      const chunkSize = 5;
      return this.images.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);
        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = []; // start a new chunk
        }
        resultArray[chunkIndex].push(item);
        return resultArray;
      }, []);
    }
  },
  methods: {
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      // this.updateCarousel();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      const carouselElement = this.$refs.carousel;
      const { $bs } = useNuxtApp();
      console.log('carousel :', $bs.Carousel);
      const bsCarousel = $bs.Carousel.getInstance(carouselElement);
      console.log('carousel :', bsCarousel);
      bsCarousel.to(Math.floor(this.currentIndex / 5))
      // this.updateCarousel();
    },
    updateCarousel() {
      const carouselElement = this.$refs.carousel;
      console.log('bs car', bsCarousel);
      const { $bs } = useNuxtApp();
      const bsCarousel = $bs.Carousel.getInstance(carouselElement);
      console.log('bs car', bsCarousel);
      if (bsCarousel) {
        bsCarousel.to(Math.floor(this.currentIndex / 5));
      }
    }
  },
  // mounted() {
  //   const carouselElement = this.$refs.carousel;
  //   const { $bs } = useNuxtApp();
  //   new $bs.Carousel(carouselElement, {
  //     interval: false
  //   });
  // }
};
</script>

<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.carousel-inner .row {
  display: flex;
}

.carousel-inner .col {
  flex: 1;
  max-width: 20%; /* 5 images per row, so 100% / 5 = 20% */
  padding: 0 5px;
}

.carousel-inner .col img {
  width: 100%;
  height: auto;
}
</style>
