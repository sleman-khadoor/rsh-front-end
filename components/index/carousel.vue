<template>
    <div class="h-100">
        <div id="carouselExampleAutoplaying" class="carousel slide p-0 h-100" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" v-for="(item, i) in props.news" :key="i" :class="i === 0 ? 'active' : ''" data-bs-target="#carouselExampleAutoplaying" :data-bs-slide-to="i" :aria-current="i === 0 ? 'true' : 'false'" :aria-label="`Slide ${i}`"></button>
            </div>
            
            <div class="carousel-inner rounded-4 h-100">
                <div v-for="(item, i) in props.news" :key="i" :class="i === 0 ? 'carousel-item active' : 'carousel-item'" :style="`background: url(${item.cover_image}); background-size: cover; min-height: 440px;`">
                    <div class="carousel-caption d-block m-4" style="text-align: unset">
                        <span class="font-large ff-medium">{{ item.title }}</span>
                        <p class="font-small ff-regular">{{ item.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  news: { cover_image: string; title: string; content: string }[];
}>();
</script>

<style scoped>
.carousel-item {
    position: relative;
    height: 100%; /* Ensures carousel items fill the height of the container */
    min-height: 440px; /* Set a minimum height to avoid layout shifts */
}

.carousel-inner {
    height: 100%; /* Ensures the carousel container fills the height */
}

.carousel-caption {
    position: absolute; /* Ensure captions are positioned correctly */
    bottom: 20px; /* Adjust as needed */
    left: 20px; /* Adjust as needed */
    right: 20px; /* Adjust as needed */
}

.carousel-item img {
    width: 100%;
    height: auto; /* Ensures the image covers the area */
    object-fit: cover; /* Ensures the image covers the entire area */
}
</style>
