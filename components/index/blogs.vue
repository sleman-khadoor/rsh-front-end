<template>
    <div class="col-12 pt-4 pb-4">
        <div class="bg-primary rounded-4">
            <div class="font-x-large ff-meduim text-dark-blue text-center pt-5">Check our latest <span class="text-choco">Blogs</span></div>
            <div class="row p-5 justify-content-center items-center">
                <div v-for="(blog, i) in props.blogs" :key="i" class="col-lg-4 col-md-4 col-sm-6 mb-3">
                    <div class="card  bg-secondary border-0 ma-1">
                        <NuxtLink :to="localePath(`/blogs/${blog.slug}`)">
                            <img :src="blog.cover_image" class="card-img-top" alt="..." width="250" height="250">
                        </NuxtLink>
                        <div class="card-body">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-small ff-regular col text-start">{{blog.writer}}</span>
                                <span class="text-dark-blue font-xx-small ff-regular col text-end">{{blog.date}}</span>
                            </div>
                            <div class="d-flex flex-wrap text-start">
                                <img src="@/assets/icon/blog-book.svg" class="mx-1" alt="..." width="15" height="15">
                                <p class="text-dark-blue font-small ff-regular">{{blog.title}}</p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  blogs: object;
}>();
</script>
