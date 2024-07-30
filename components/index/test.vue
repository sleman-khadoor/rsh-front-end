<template>
    <div id="carouselExample" class="carousel slide book-slider" data-bs-ride="carousel">
        <div class="carousel-inner w-100 m-auto" ref="carouselInner">
            <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
                <div class="d-flex justify-content-center">
                    <div v-for="(image, subIndex) in chunk" :key="subIndex" class="carousel-image col-lg-2 col-md-4 col-sm-12">
                        <img :src="image.cover_image" width="194" height="252" class="d-block mx-auto" :alt="image.title">
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <img src="/icon/carousel-prev.svg" class="d-block" alt="Previous" width="32" height="32">
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <img src="/icon/carousel-next.svg" class="d-block" alt="Next" width="32" height="32">
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
<script>
import { defineComponent, ref, onMounted, watch } from 'vue';

export default defineComponent({
    props: ['books'],
    setup(props) {
        const images = ref(props.books);
        const chunks = ref([]);
        
        const createChunks = () => {
            const width = window.innerWidth;
            let imagesPerSlide;

            if (width >= 1120) {
                imagesPerSlide = 5;
            } else if (width >= 992) {
                imagesPerSlide = 4;
            } else if (width >= 768) {
                imagesPerSlide = 3;
            } else {
                imagesPerSlide = 1;
            }

            chunks.value = [];
            for (let i = 0; i < images.value.length; i += imagesPerSlide) {
                chunks.value.push(images.value.slice(i, i + imagesPerSlide));
            }
        };

        onMounted(() => {
            createChunks();
            window.addEventListener('resize', createChunks);
        });

        watch(images, createChunks);

        return {
            chunks
        };
    },
});
</script>
