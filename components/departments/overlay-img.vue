<template>
<div class="section">
  <div :class="'card d-flex align-items-stretch bg-img' + (props.gallery ? ' rounded-0' : ' rounded-4')" :style="`background: url(${dynamicImg})`">
        <div :class="dynamicOverlayClass">
            <div :class="!props.gallery ? 'my-md-1 mx-auto' : 'px-3 bottom-0 position-absolute'">
                <h5 :class="dynamicTitleClass">{{ props.title }}</h5>
                <p :class="dynamicSubTitleClass">
                    {{props.text}}
                </p>
                <button v-if="(!props.gallery) && props.btn" type="button" :class="dynamicClass">
                  <div class="p-lg-1 font-meduim ff-regular">
                    {{$t('departments.requestBtn')}}
                    <a href="#contacts">
                      <img src="@/assets/icon/arrow-circle-right.svg">
                    </a>
                  </div>
                  </button>
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
  : 'd-flex align-items-center overlay bg-opacity-25 text-primary h-100 p-lg-3 p-md-3';
});
// computed dynamic title class
const dynamicTitleClass = computed(() => {
  return props.gallery ? 'font-x-large ff-meduim mb-2' 
  : 'font-xx-large ff-bold my-3';
});
// computed dynamic subtitle class
const dynamicSubTitleClass = computed(() => {
  return props.gallery ? 'font-small ff-regular mb-4' 
  : 'font-large ff-regular mb-4 rsp-font';
});
// computed dynamic Img
const dynamicImg = computed(() => {
  return `/_nuxt/assets/img/${props.imgSrc}.jpg`;
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
.section {
  width: 100%;
  height: auto;
  min-height: auto;
}
</style>