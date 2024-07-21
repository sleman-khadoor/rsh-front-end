<template>
                <div class="card  bg-primary border-0  mx-auto my-3">
                        <NuxtLink :to="localePath(`/blogs/${props.blog.slug}`)">
                            <img :src="blog.cover_image" class="card-img-top" alt="..." width="336" height="220">
                        </NuxtLink>
                        <div class="card-body">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-x-small col text-start">{{blog.writer}}</span>
                                <span class="text-dark-blue font-x-small col text-end">{{blog.date}}</span>
                            </div>
                            <div class="d-flex flex-wrap text-start">
                                <img src="@/assets/icon/blog-book.svg" class="mx-1" alt="..." width="15" height="15">
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