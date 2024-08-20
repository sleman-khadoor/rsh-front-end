<template>
    <div id="carouselExample" class="carousel">
    <div class="carousel-inner mx-2 w-93per mx-auto" ref="carouselInner">
        <div ref="carouselCategoryItem" v-for="(category, index) in categories" :key="index" :class="checkedValues.includes(category) ? 'carousel-item active' : 'carousel-item'">
            <input 
             type="checkbox"
             class="btn-check"
             :class="{'bg-dark-blue': checkedValues.includes(category)}"
             @input="updateCheckedValues(category)"
             v-model="checkedValues"
             name="vbtn-radio" 
             :id="`vbtn-radio_${index + 1}`" 
             autocomplete="off">
            <label :class="checkedValues.includes(category) ? `btn btn-outline-choco bg-choco text-white` : `btn btn-outline-choco`"
            :for="`vbtn-radio_${index + 1}`" style="min-width:100%; width: max-content;">{{category.title}}</label>
        </div>
    </div>
    <button class="carousel-control-prev" @click="castumPrev()" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
       <img src="/icon/cat-prev.svg" class="d-block" alt="rashm category" width="32" height="32" style=" transform: rotate(180deg); ">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" @click="castumNext()" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <img src="/icon/cat-next.svg" class="d-block" alt="rashm category" width="32" height="32">
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const { locale } = useI18n()
const emit = defineEmits()
const props = defineProps({
  categories: {
    type: Array
  }
});
const carouselInner = ref(null);
const carouselCategoryItem = ref(null);
var carouselWidth = ref(0);
var cardWidth = ref(0);
var scrollPosition = ref(0);
var fivePercentWidth = ref(0);
const isRtl = ref(false);
const checkedValues = ref([]);

const updateCheckedValues = (category) => {
  // Emit the checked values when a checkbox is checked/unchecked
  const index = checkedValues.value.indexOf(category);
  if (index > -1) {
    checkedValues.value.splice(index, 1); // Remove if unchecked
  } else {
    checkedValues.value.push(category); // Add if checked
  }
  emit('updateCategory', checkedValues.value);
};

function showNext() {
  if (scrollPosition.value < (carouselWidth.value - cardWidth.value * 4)) { //check if you can go any further
    scrollPosition.value += cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth' // This provides smooth scrolling animation
    });
  }
}
function showPrevAr() {
  if (Math.abs(scrollPosition.value) < (carouselWidth.value - cardWidth.value * 4)) { //check if you can go any further
    console.log('object',Math.abs(scrollPosition.value) < (carouselWidth.value - cardWidth.value * 4) );
    console.log('object',Math.abs(scrollPosition.value) >= (carouselWidth.value - cardWidth.value * 4) );
    scrollPosition.value -= cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth' // This provides smooth scrolling animation
    });
  }
}
function showPrev() {
  if (scrollPosition.value > 0) { //check if you can go any further
    scrollPosition.value -= cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth' // This provides smooth scrolling animation
    });
  }
}
function showNextAr() {
  if (Math.abs(scrollPosition.value) > 0) { //check if you can go any further
    scrollPosition.value = scrollPosition.value + cardWidth.value;  //update scroll position
    carouselInner.value.scrollTo({
      left: scrollPosition.value,
      behavior: 'smooth' // This provides smooth scrolling animation
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
const hiddenNext = computed(()=> {
  if(locale.value == 'ar') {
    return Math.abs(scrollPosition.value) <= 0
  } else {
    return scrollPosition.value >= (carouselWidth.value - cardWidth.value * 8)
  }
})
const hiddenPrev = computed(()=> {
  if(locale.value == 'ar') {
    return Math.abs(scrollPosition.value) >= (carouselWidth.value - cardWidth.value * 8)
  } else {
    return scrollPosition.value <= 0
  }
})
function detectDirection() {
  // Check the document direction (rtl or ltr)
  isRtl.value = locale.value === 'ar';
}
onMounted(async () => {
    detectDirection()
    scrollPosition.value = 0;
    carouselWidth.value = carouselInner.value.scrollWidth;
    cardWidth.value = await carouselCategoryItem.value?.[0].offsetWidth;
    let carousel_control_next = document.getElementsByClassName('carousel-control-next');
})
</script>

<style scoped>
@media only screen and (min-width: 1120px) {
.carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 12.5%;
    display: block;
  }
}
@media only screen and (max-width: 1120px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 14.2%;
    display: block;
  }
}
@media only screen and (max-width: 992px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 16.6666667%;
    display: block;
  }
}
@media only screen and (max-width: 840px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 20%;
    display: block;
  }
}
@media only screen and (max-width: 745px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 25%;
    display: block;
  }
}
@media only screen and (max-width: 610px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 33.33333%;
    display: block;
  }
}
@media only screen and (max-width: 480px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
    flex: 0 0 50%;
    display: block;
  }
}
@media only screen and (max-width: 340px) {
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    text-align: center;
    margin-right: 0.5%;
    margin-left:  0.5%;
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
.btn-outline-choco {
    --bs-btn-color: #82704A;
    --bs-btn-bg: #F9F9F9;
    --bs-btn-border-color: #82704A;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #82704A;
    --bs-btn-hover-border-color: #82704A;
    --bs-btn-focus-shadow-rgb: 13, 110, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #82704A;
    --bs-btn-active-border-color: #82704A;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #82704A;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #82704A;
    --bs-gradient: none;
}
.w-93per{
    width: 93%;
    margin-left: auto !important;
    margin-right: auto !important;
}
@media only screen and (max-width: 900px) {
    .w-93per{
        width: 90%;
    }
}
@media only screen and (max-width: 800px) {
    .w-93per{
        width: 86%;
    }
}
@media only screen and (max-width: 650px) {
    .w-93per{
        width: 80%;
    }
}
</style>