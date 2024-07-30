<template>
                <div class="card  bg-primary border-0  mx-auto my-3 w-fc">
                        <NuxtLink :to="localePath(`/blogs/${props.blog.slug}`)">
                          <figure class="overlay">
                            <img :src="blog.cover_image" class="card-img-top" :alt="blog.title" width="250" height="280">
                          </figure>   
                        </NuxtLink>
                        <div class="card-body">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-x-small col text-start">{{blog.writer}}</span>
                                <span class="text-dark-blue font-x-small col text-end">{{dateTimeFormatter(blog.date)}}</span>
                            </div>
                            <div class="d-flex flex-wrap text-start">
                                <img src="/icon/blog-book.svg" class="mx-1" alt="..." width="15" height="15">
                                <p class="text-dark-blue font-x-small">{{blog.title}}</p>
                            </div>
                        </div>
                    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  blog: object;
}>();
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