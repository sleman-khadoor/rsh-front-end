<template>
    <div class="text-center mx-auto my-3 w-fc rounded-3">
        <NuxtLink rel="canonical" :to="localePath(`/books/${getSlugByLang(props.book?.slug)}`)">
            <img :src="url + book.cover_image" class="d-block mx-auto mb-2 img-shadow rounded-3 object-fit-fill" :alt="book.title" height="206" width="159">
        </NuxtLink>
        <div class="text-dark-blue">
            {{book.title}}
        </div>
        <div class="text-choco">
            {{book.author?.name}}
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';

const props = defineProps({
  book:{type: Object}
});
const url = ref(baseURL);
onMounted(() => {
  if (process.client) {
    url.value = baseURL;
  }
});
</script>
<style scoped>
.img-shadow {
    -webkit-box-shadow: 75px 75px 50px -90px rgba(0,0,0,0.75);
    -moz-box-shadow: 75px 75px 50px -90px rgba(0,0,0,0.75);
    box-shadow: 75px 75px 50px -90px rgba(0,0,0,0.75);
}
</style>