<template>
<div class="section">
  <div :class="'card d-flex align-items-stretch bg-img' + (props.gallery ? ' rounded-0' : ' rounded-4')" :style="`background: url(${dynamicImg});`">
        <div :class="dynamicOverlayClass">
            <div :class="!props.gallery ? 'my-md-1 mx-auto' : 'px-3 bottom-0 position-absolute'">
                <h5 :class="dynamicTitleClass">{{ props.title }}</h5>
                <p :class="dynamicSubTitleClass">
                    {{props.text}}
                </p>
                <a href="#contacts">
                <button v-if="(!props.gallery) && props.btn" type="button" :class="dynamicClass">
                  <div class="p-lg-1 font-meduim ff-regular">
                    {{$t('departments.requestBtn')}}
                      <img src="/icon/arrow-circle-right.svg" class="rotate-ar" :alt="props.title">
                  </div>
                  </button>
                  </a>
            </div>            
        </div>
  </div>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  imgSrc: string;
  title: string;
  text: string;
  gallery: boolean;
  btn: boolean;
  btnColor: string;
}>();
// computed dynamic class
const dynamicClass = computed(() => {
  return `btn text-primary px-lg-3 py-lg-2 mb-2 font-meduim ff-regular rounded-5 ${props.btnColor}`;
});
// computed dynamic class
const dynamicOverlayClass = computed(() => {
  return props.gallery ? 'overlay bg-black bg-opacity-50 text-primary h-100' 
  : 'd-flex align-items-center dark-blue-overlay text-primary h-100 p-lg-3 p-md-3';
});
// computed dynamic title class
const dynamicTitleClass = computed(() => {
  return props.gallery ? 'font-x-large ff-meduim mb-2' 
  : 'font-xx-large ff-bold my-3';
});
// computed dynamic subtitle class
const dynamicSubTitleClass = computed(() => {
  return props.gallery ? 'font-small ff-regular mb-4 lh-22' 
  : 'font-large ff-regular mb-4 px-3 rsp-font lh-30';
});
// computed dynamic Img
const dynamicImg = computed(() => {
  return `/img/${props.imgSrc}.webp`;
});
</script>
<style scoped>
.bg-img {
  background-repeat: no-repeat;
    background-position: top center;
    min-height: 45vh;
    height: fit-content;
    width: 100%;
    background-size: cover !important;
    background-position: center !important;
    overflow: hidden;
}
.overlay {
    height: inherit;
    min-height: inherit;
    background-color: rgba(5, 5, 5, 0.46);
    margin-left: auto;
    margin-right: auto;
    width: 100%;

}
.dark-blue-overlay {
    height: inherit;
    min-height: inherit;
    background-color: rgba(11, 41, 74, 0.50);
    margin-left: auto;
    margin-right: auto;
    width: 100%;

}
.section {
  width: 100%;
  height: auto;
  min-height: auto;
}
[dir="rtl"] .rotate-ar{
  transform: rotate(180deg);
}
</style>