<template>
    <div class="col-12 pb-4">
        <div class="bg-primary rounded-5">
            <div class="font-x-large ff-meduim text-dark-blue text-center pt-5">{{t('index.blogsTitle1') }} <span class="text-choco">{{t('index.blogsTitle2') }}</span></div>
            <div class="row p-5 justify-content-center align-content-stretch items-center">
                <div v-for="(blog, i) in props.blogs" :key="i" class="col-lg-4 col-md-6 col-sm-6 mb-3">
                    <div ref="relativeCard" class="card  bg-secondary border-0 ma-1 h-100 rounded-3">
                        <NuxtLink :to="localePath(`/blogs/${blog.slug}`)" style="height: 280px">
                        <figure class="overlay rounded-top-3">
                            <img :src="url + blog.cover_image" class="card-img-top rounded-top-3 object-fit-fill" :alt="blog.title" width="250" height="280">
                        </figure>
                        </NuxtLink>
                        <div class="card-body" :dir="getDir(blog)">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-small ff-regular col w-fc">{{blog.writer}}</span>
                                <span class="text-dark-blue font-xx-small ff-regular col w-fc">{{dateTimeFormatter(blog.date)}}</span>
                            </div>
                            <div class="d-flex text-dark-blue font-small ff-regular">
                                <img src="/icon/blog-book.svg" class="mx-1" :alt="blog.title" width="15" height="15">
                                {{blog.title}}
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
const relativeCard = ref(null);
const cardHeight = ref('auto');
const props = defineProps({
  blogs: {
    type: Array
  }
});
function getDir(blog) {
  return blog.lang === 'ar' ? 'rtl' : 'ltr'
}
const url = ref(baseURL);
 function setMaxCardHeight() {
  if(relativeCard.value){
            relativeCard.value.forEach(card => {
                card.style.minHeight = `unset`;
            });
            const heights = relativeCard.value.map(card => card.offsetHeight);
            console.log('object', relativeCard.value);
            cardHeight.value = Math.max(...heights);
            relativeCard.value.forEach(card => {
                card.style.minHeight = `${cardHeight.value}px`;
            });
  }
};
// watch(()=> props.blogs, () =>{
//   console.log('update, ', props.blogs.length);
//   if(props.blogs && props.blogs.length) {
//      setInterval(setMaxCardHeight(), 1000)
//   } 
// })
onMounted(async() => {
  if (process.client) {
    url.value = baseURL;
    await setInterval(setMaxCardHeight(), 1000)
    window.addEventListener('resize', setMaxCardHeight)
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
