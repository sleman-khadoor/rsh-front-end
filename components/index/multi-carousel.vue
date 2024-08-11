<template>
    <div id="carouselExampleControls" class="carousel">
    <div class="carousel-inner w-95 mx-auto" ref="carouselInner">
        <div ref="carouselItem" v-for="(book, i) in books" :class="i == 0 ? 'carousel-item active' : 'carousel-item'">
          <NuxtLink :to="localePath(`/books/${getSlugByLang(book?.slug)}`)">
            <img :src="url + book.cover_image" width="200" height="280" class="img-shadow d-block" :alt="book.title">
          </NuxtLink>
        </div>
    </div>
    <button class="carousel-control-prev" @click="castumPrev()" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
       <img src="/icon/carousel-prev.svg" class="d-block" alt="..." width="42" height="42">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" @click="castumNext()" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <img src="/icon/carousel-next.svg" class="d-block" alt="..." width="42" height="42">
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { baseURL } from '@/utils/global';
const { locale } = useI18n()
const props = defineProps({
  books: {
    type: Array
  }
});
const carouselInner = ref(null);
const carouselItem = ref(null);
const url = ref(baseURL);
var carouselWidth = ref(0);
var cardWidth = ref(0);
var scrollPosition = ref(0);
var fivePercentWidth = ref(0);
const isRtl = ref(false);

function showNext() {
  if (scrollPosition.value < (carouselWidth.value - cardWidth.value * 4)) {
    scrollPosition.value += cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth'
    });
  }
}
function showPrevAr() {
  if (Math.abs(scrollPosition.value) < (carouselWidth.value - cardWidth.value * 4)) {
    scrollPosition.value -= cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth'
    });
  }
}
function showPrev() {
  if (scrollPosition.value > 0) {
    scrollPosition.value -= cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth'
    });
  }
}
function showNextAr() {
  if (Math.abs(scrollPosition.value) > 0) {
    scrollPosition.value = scrollPosition.value + cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth'
    });
  }
}
function castumNext() {
     if (isRtl.value) {
        showNextAr()
     } else {
        showNext()
     }
}
function castumPrev() {
     if (isRtl.value) {
        showPrevAr()
     } else {
        showPrev()
     }
}
function detectDirection() {
  // Check the document direction (rtl or ltr)
  isRtl.value = locale.value === 'ar';
}
onMounted(async () => {
    if (process.client) {
      url.value = baseURL;
    }
    detectDirection()
    scrollPosition.value = 0;
    carouselWidth.value = carouselInner.value.scrollWidth;
    cardWidth.value = await carouselItem.value?.[0].offsetWidth;
    let carousel_control_next = document.getElementsByClassName('carousel-control-next');
    if (isRtl.value) {
        showPrevAr()
        showPrevAr()
     } else {
        showNext()
        showNext()
     }
})
</script>

<style scoped>
.carousel-inner {
    display: flex;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .carousel-item {
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    flex: 0 0 19.9%;
    display: block;
  }
@media only screen and (max-width: 1120px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    /* margin-right: 0; */
    flex: 0 0 25.04%;
    display: block;
  }
}
@media only screen and (max-width: 992px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    /* margin-right: 0; */
    flex: 0 0 33.3733333%;
    display: block;
  }
}
@media only screen and (max-width: 768px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    /* margin-right: 0; */
    flex: 0 0 50.04%;
    display: block;
  }
}
@media only screen and (max-width: 600px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    /* margin-right: 10%;
    margin-left: 10%; */
    flex: 0 0 100%;
    display: block;
  }
}
.carousel-inner{
    padding: 1em;
}
.img-shadow{
    /* margin: 0 .5em; */
    margin: auto;
    box-shadow: 2px 6px 8px 0 rgba(22, 22, 26, 0.18);
    border: none;
}
.carousel-control-prev, .carousel-control-next{
    /* background-color: #e1e1e1; */
    width: 6vh;
    height: 6vh;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
}
</style>