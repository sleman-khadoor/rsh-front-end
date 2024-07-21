<template>
    <div class="text-center mx-auto my-3">
        <NuxtLink :to="localePath(`/books/${getSlugByLang(props.book?.slug)}`)">
            <img :src="book.cover_image" class="d-block mx-auto mb-2" alt="..." height="206" width="159">
        </NuxtLink>
        <div class="text-dark-blue">
            {{book.title}}
        </div>
        <div class="text-choco">
            {{book.author?.name}}
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  book: object;
}>();
</script>