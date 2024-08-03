<template>
    <div class="row">
        <div class="d-flex author-description p-0">
            <img :src="url + props.author?.avatar" class="p-0 mb-2 img-border" alt="Author Image">
            <span class="font-meduim ff-meduim my-auto px-2">{{props.author?.name}}</span>
        </div>
        <div class="row font-small ff-regular m-0 p-0 lh-25">
            {{props.author?.about}}
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';

const props = defineProps({
  author:{type: Object}
});
const url = ref(baseURL);
onMounted(() => {
  if (process.client) {
    url.value = baseURL;
  }
});
</script>

<style scoped>
.author-description img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            position: relative;
        }
    .img-border {
      border: 2px solid #82704A;
    }
</style>