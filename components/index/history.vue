<template>
    <div>
        <div v-for="(row, i) in props.data" :key="i" :class="`${props.col} d-flex justify-content-start rounded-3 text-dark-blue bg-primary p-2 mb-3`">
               <div :class="`${props.bgColor} rounded-3 w-auto square col-auto  ff-meduim`"> <div class="center"> 0{{i+1}} </div> </div>
               <p class="font-meduim px-2 ff-regular"> {{row.text}}</p>       
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  data: array;
  bgColor: string;
  col: string;
}>();
</script>
<style scoped>
.square {
  height: 3.3rem !important;
  width: 3.5rem !important;
  justify-content: center !important;
  align-items: center !important;
}
.center {
    width: max-content;
    margin: auto;
    margin-top: 21%;
    margin-bottom: 15%;
}
</style>