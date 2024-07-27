<template>
    <div class="card text-center bg-secondary border-0 rounded-4 pt-3 my-3 h-100">
    <div class="card-body text-dark-blue">
        <img :src="dynamicIcon" alt="rashm" height="40" width="40">
        <p v-if="!props.subTitle" class="card-text font-small ff-regular mt-3">{{props.title}}</p>
        <p v-if="props.subTitle" class="card-text font-meduim ff-semiBold mt-3">{{props.title}}</p>
        <p v-if="props.subTitle" class="card-text font-small ff-regular mt-3">{{props.subTitle}}</p>
    </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  iconSrc: string;
  title: string;
  subTitle: string;
}>();
// computed dynamic Icon
const dynamicIcon = computed(() => {
  return `/icon/${props.iconSrc}.svg`;
});
</script>