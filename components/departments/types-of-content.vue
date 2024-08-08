<template>
<div>
  <div class="row rounded-3 border-0 align-content-stretch justify-content-end">
        <div v-for="(content, i) in props.contents" :key="i" :class="content.class">
            <DepartmentsOverlayImg
                    :imgSrc="content.imgSrc"
                    :gallery="true"
                    :text="content.text"
                    :title="content.title"/>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
const props = defineProps<{
  contents: Array;
}>();
// computed dynamic class
const dynamicClass = computed(() => {
  return `btn text-primary p-lg-3 font-x-small rounded-5 ${props.btnColor}`;
});
// computed dynamic Img
const dynamicImg = computed(() => {
  return `/img/${props.imgSrc}.jpg`;
});
</script>