<template>
    <div class="text-center mx-auto my-3 px-3 w-fc">
       <a :href="props.partner.website_link" target="_blank">
        <img :src="url + props.partner.avatar" class="d-block mb-2 rounded-4" alt="..." height="150" width="150">
       </a>
        <div class="text-dark-blue font-small ff-regular lh-16">
            {{props.partner?.name}}
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';

const props = defineProps({
  partner:{type: Object}
});
const url = ref(baseURL);
onMounted(() => {
  if (process.client) {
    url.value = baseURL;
  }
});
</script>