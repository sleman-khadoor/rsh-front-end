<template>
<div v-for="(department,i) in props.departments" :key="i" :class="props.class">
  <div ref="relativeCard" class="card text-center bg-secondary border-0 rounded-4 pt-3 my-3 card-100">
    <div class="card-body text-dark-blue">
        <img :src="dynamicIcon(department.iconSrc)" alt="rashm" height="40" width="40">
        <p v-if="!department.subTitle" class="card-text font-small ff-regular mt-3 lh-25">{{department.title}}</p>
        <p v-if="department.subTitle" class="card-text font-meduim ff-semiBold mt-3 lh-25">{{department.title}}</p>
        <p v-if="department.subTitle" class="card-text font-small ff-regular mt-3 lh-25">{{department.subTitle}}</p>
    </div>
    </div>
</div>
</template>
<script setup>
const props = defineProps({
  departments:{type: Array},
  class:{type: String},
});
const relativeCard = ref(null);
const cardHeight = ref('auto');
onMounted(async() => {
  if (process.client) {
    await setMaxCardHeight()
    window.addEventListener('resize', setMaxCardHeight)
  }
});
 function setMaxCardHeight() {
            relativeCard.value.forEach(card => {
                card.style.minHeight = `unset`;
            });
            const heights = relativeCard.value.map(card => card.offsetHeight);
            console.log('object', relativeCard.value);
            cardHeight.value = Math.max(...heights);
            relativeCard.value.forEach(card => {
                card.style.minHeight = `${cardHeight.value}px`;
            });
};
onUpdated(()=> {
  console.log('update');
  if(props.departments && props.departments.length) {
     setInterval(setMaxCardHeight(), 5000)
  } 
})
// computed dynamic Icon
function dynamicIcon (iconSrc) {
  return `/icon/${iconSrc}.svg`;
};
</script>
<style scoped>
.card-100{
    height: 100%;
}
</style>