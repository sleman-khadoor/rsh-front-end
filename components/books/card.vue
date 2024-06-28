<template>
    <div class="text-center mx-auto my-3">
        <NuxtLink :to="`/books/${props.book.id}`">
            <img src="@/assets/img/book.jpg" class="d-block mx-auto mb-2" alt="..." height="200" width="140">
        </NuxtLink>
        <div class="text-dark-blue">
            Here write the name
            of the book
        </div>
        <div class="text-choco">
            Author Name
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
  book: object;
}>();
</script>