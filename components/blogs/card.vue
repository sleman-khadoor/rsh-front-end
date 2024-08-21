<template>
              <div v-for="(blog,i) in props.blogs" :key="i" class="col-lg-3 col-md-4 col-sm-6 my-3">
                <div ref="relativeCard" class="card  bg-primary border-0 card-100  mx-auto rounded-3">
                        <NuxtLink :to="localePath(`/blogs/${blog.slug}`)" style="height: 220px">
                          <figure class="overlay rounded-top-3">
                            <img :src="url + blog.cover_image" class="card-img-top rounded-top-3 object-fit-fill" :alt="blog.title" height="220">
                          </figure>   
                        </NuxtLink>
                        <div class="card-body" :dir="getDir(blog)">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-x-small col w-fc">{{blog.writer}}</span>
                                <span class="text-dark-blue font-x-small col w-fc">{{dateTimeFormatter(blog.date)}}</span>
                            </div>
                            <div class="d-flex text-dark-blue font-x-small">
                                <img src="/icon/blog-book.svg" class="mx-1" alt="..." width="15" height="15">
                                {{blog.title}}
                            </div>
                        </div>
                    </div>
                  </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';

const props = defineProps({
  blogs:{type: Array}
});
const url = ref(baseURL);
const relativeCard = ref(null);
const cardHeight = ref('auto');
function getDir(blog) {
  return blog.lang === 'ar' ? 'rtl' : 'ltr'
}
onMounted(async() => {
  if (process.client) {
    url.value = baseURL;
    // await setMaxCardHeight();
                
    window.addEventListener('resize', setMaxCardHeight)
    // setInterval(setMaxCardHeight, 1000);
  }
});
 function setMaxCardHeight() {
            relativeCard.value.forEach(card => {
                card.style.minHeight = `unset`;
            });
            const heights = relativeCard.value.map(card => card.offsetHeight);
            cardHeight.value = Math.max(...heights);
            relativeCard.value.forEach(card => {
                card.style.minHeight = `${cardHeight.value}px`;
            });
};
onUpdated(()=> {
  if(props.blogs && props.blogs.length) {
     setInterval(setMaxCardHeight(), 5000)
  } 
})
</script>
<style scoped>
.overlay::before {
  content: '';
  z-index: 10;
  width: 100%;
  height: 220px;
  display: block;
  position: absolute;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 50%);
}
.card-100{
    height: 100%;
}
.w-30per{
    width: 30%;
    max-width: 30%;
}
@media only screen and (max-width: 828px) {
    .w-30per{
        width: 45%;
        max-width: 45%;
    }
}
@media only screen and (max-width: 549px) {
    .w-30per{
        width: 70%;
        max-width: 70%;
    }
}
</style>