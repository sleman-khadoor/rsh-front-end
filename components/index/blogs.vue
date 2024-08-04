<template>
    <div class="col-12 pb-4">
        <div class="bg-primary rounded-5">
            <div class="font-x-large ff-meduim text-dark-blue text-center pt-5">{{t('index.blogsTitle1') }} <span class="text-choco">{{t('index.blogsTitle2') }}</span></div>
            <div class="row p-5 justify-content-center align-content-stretch items-center">
                <div v-for="(blog, i) in props.blogs" :key="i" class="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div class="card  bg-secondary border-0 ma-1 h-100">
                        <NuxtLink :to="localePath(`/blogs/${blog.slug}`)">
                        <figure class="overlay">
                            <img :src="url + blog.cover_image" class="card-img-top" :alt="blog.title" width="250" height="280">
                        </figure>
                        </NuxtLink>
                        <div class="card-body">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-small ff-regular col w-fc">{{blog.writer}}</span>
                                <span class="text-dark-blue font-xx-small ff-regular col w-fc">{{dateTimeFormatter(blog.date)}}</span>
                            </div>
                            <div class="d-flex flex-wrap text-start">
                                <img src="/icon/blog-book.svg" class="mx-1" :alt="blog.title" width="15" height="15">
                                <p class="text-dark-blue font-small ff-regular">{{blog.title}}</p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';

const { t } = useI18n();
const props = defineProps({
  blogs: {
    type: Object
  }
});
const url = ref(baseURL);
onMounted(() => {
  if (process.client) {
    url.value = baseURL;
  }
});
</script>
<style scoped>
.overlay::before {
  content: '';
  z-index: 10;
  width: 100%;
  height: 280px;
  display: block;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%);
}
</style>
