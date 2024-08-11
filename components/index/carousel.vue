<template>
    <div class="h-100" style="min-height: 400px">
        <div id="carouselExampleAutoplaying" class="carousel slide p-0 h-100" 
        data-bs-ride="carousel"
        data-bs-pause="hover"
        data-bs-interval="5000">
            <div class="carousel-indicators">
                <button type="button" v-for="(item, i) in props.news" :key="i" :class="i === 0 ? 'active' : ''" data-bs-target="#carouselExampleAutoplaying" :data-bs-slide-to="i" :aria-current="i === 0 ? 'true' : 'false'" :aria-label="`Slide ${i}`"></button>
            </div>
            
            <div class="carousel-inner rounded-4 h-100">
                <figure class="overlay h-100">
                <div v-for="(item, i) in props.news" :key="i" :class="i === 0 ? 'carousel-item active bg-img' : 'carousel-item bg-img'" :style="`background: url(${url + item.cover_image});`">
                    <div class="carousel-caption d-block m-4" style="text-align: unset">
                        <span class="font-large ff-medium">{{ item.title }}</span>
                        <p class="font-small ff-regular lh-25">{{ item.content }}</p>
                    </div>
                </div>
                </figure>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue';
import { baseURL } from '@/utils/global';

const props = defineProps({
  news: {
    type: Array,
    required: true,
  }
});

const url = ref(baseURL);
const { $bootstrap } = useNuxtApp();
const restartCarousel = () => {
  if ($bootstrap) {
    const carouselElement = document.getElementById('carouselExampleAutoplaying');
    if (carouselElement) {
      const carousel = new $bootstrap.Carousel(carouselElement, {
        interval: 5000,
        ride: 'carousel'
      });
      carousel.cycle();
    }
  } else {
    console.error('Bootstrap instance is undefined');
  }
};

onMounted(async() => {
  if (process.client) {
    url.value = baseURL;

    // Initial start
    await restartCarousel();
    
    // Listen for the language-switched event
    window.addEventListener('language-switched', restartCarousel);
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    window.removeEventListener('language-switched', restartCarousel);
  }
});
</script>
<style scoped>
.carousel-item {
    position: relative;
    height: 100%; /* Ensures carousel items fill the height of the container */
    min-height: 440px; /* Set a minimum height to avoid layout shifts */
}

.carousel-inner {
    height: 100%; /* Ensures the carousel container fills the height */
}

.carousel-caption {
    position: absolute; /* Ensure captions are positioned correctly */
    bottom: 20px; /* Adjust as needed */
    left: 20px; /* Adjust as needed */
    right: 20px; /* Adjust as needed */
    z-index: 2;
}

.carousel-item img {
    width: 100%;
    height: auto; /* Ensures the image covers the area */
    object-fit: cover; /* Ensures the image covers the entire area */
}
.overlay::before {
  content: '';
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 440px;
  display: block;
  position: absolute;
  margin: 0 !important;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0) 70%);
}
figure {
    margin: unset !important;
}
.bg-img {
  background-repeat: no-repeat;
    background-position: top center;
    min-height: 100%;
    height: fit-content;
    min-width: 100%;
    width: max-content;
    background-size: cover !important;
    background-position: center !important;
    overflow: hidden;
}
</style>
