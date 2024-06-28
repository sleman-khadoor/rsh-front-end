<template>
    <div :class="dynamicClass" type="button">
        {{text}}
    </div>
</template>
<script setup lang="ts">
// const props = defineProps({
//   text: {
//     type: String,
//     required: true,
//   },
// });
// const { text } = props;
const props = defineProps<{
  text: string;
  bgColor: string;
}>();
// computed dynamic class
const dynamicClass = computed(() => {
  return `p-4 text-center text-primary font-x-large weight-regular rounded-3 ${props.bgColor}`;
});
</script>