<template>
<div>
  <div class="card rounded-3 border-0 align-content-stretch bg-op">
        <img :src="dynamicImg" 
        :class="!props.gallery ? 'd-block w-100 object-fit-cover rounded-4' : 'd-block w-100 object-fit-cover'" 
        style="height: 55vh !important;min-height: 300px !important" alt="...">
        <div :class="dynamicOverlayClass">
            <div :class="!props.gallery ? 'my-md-1' : 'bottom-0 position-absolute'">
                <h5 :class="dynamicTitleClass">{{ props.title }}</h5>
                <p :class="dynamicSubTitleClass">
                    {{props.text}}
                </p>
                <button v-if="!props.gallery" type="button" :class="dynamicClass">
                  <div class="p-lg-1">
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
  btnColor: string;
}>();
// computed dynamic class
const dynamicClass = computed(() => {
  return `btn text-primary px-lg-3 py-lg-2 font-meduim weight-regular rounded-5 ${props.btnColor}`;
});
// computed dynamic class
const dynamicOverlayClass = computed(() => {
  return props.gallery ? 'card-img-overlay bg-black bg-opacity-50 text-primary h-100' 
  : 'd-flex align-items-center card-img-overlay bg-black bg-opacity-25 text-primary h-100 p-lg-5 p-md-3 rounded-4';
});
// computed dynamic title class
const dynamicTitleClass = computed(() => {
  return props.gallery ? 'font-x-large weight-meduim mb-2' 
  : 'font-xx-large weight-bold mb-2';
});
// computed dynamic subtitle class
const dynamicSubTitleClass = computed(() => {
  return props.gallery ? 'font-small weight-regular mb-4' 
  : 'font-large weight-regular mb-4';
});
// computed dynamic Img
const dynamicImg = computed(() => {
  return `/_nuxt/assets/img/${props.imgSrc}.jpg`;
});
</script>