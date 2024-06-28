<template>
    <div class="card text-center bg-secondary border-0 rounded-4 pt-3 my-3 h-100">
    <div class="card-body">
        <img :src="dynamicIcon" alt="rashm" height="40" width="40">
        <p class="card-text font-small weight-regular mt-3">{{props.title}}</p>
    </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  iconSrc: string;
  title: string;
}>();
// computed dynamic Icon
const dynamicIcon = computed(() => {
  return `/_nuxt/assets/icon/${props.iconSrc}.svg`;
});
</script>