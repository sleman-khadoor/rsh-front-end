<template>
    <div id="carouselExample" class="carousel slide p-3" data-bs-ride="carousel">
    <div class="carousel-inner w-100 m-auto btn-group" ref="carouselInner" role="group" aria-label="d-flex radio toggle button group">
        <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="d-flex justify-content-center">
            <!-- <div > -->
            <div v-for="(category, subIndex) in chunk" :key="subIndex" class="carousel-category col-lg-3 col-md-4 col-md-6">
                 <input type="radio" class="btn-check" @input="selectCategory(category)" name="vbtn-radio" :id="`vbtn-radio${index}_${subIndex + 1}`" autocomplete="off" :checked="subIndex === 0">
                 <label class="btn btn-outline-choco" :for="`vbtn-radio${index}_${subIndex + 1}`">{{category.name}}</label>
            </div>
            <!-- </div> -->
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <img src="@/assets/icon/carousel-prev.svg" class="d-block" alt="..." width="32" height="32">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <img src="@/assets/icon/carousel-next.svg" class="d-block" alt="..." width="32" height="32">
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script>
export default defineComponent({
    props: ['categories'],
    setup(props) {
      const categories = ref(props.categories);
      const chunks = ref([]);
      const createChunks = () => {
        const width = window.innerWidth
        let imagesPerSlide

        if (width >= 992) {
          imagesPerSlide = 7
        } else if (width >= 768) {
          imagesPerSlide = 5
        } else {
          imagesPerSlide = 3
        }
        chunks.value = []
        for (let i = 0; i < categories.value.length; i += imagesPerSlide) {
          console.log('test carousel : ', categories.value);
          console.log('test carousel 2 : ', categories.value.slice(i, i + imagesPerSlide));
          chunks.value.push(categories.value.slice(i, i + imagesPerSlide));
          console.log('test carousel 3 : ', chunks);
        }
      };
      function selectCategory(category) {
        console.log('object this:', category);
      }
      onMounted(() => {
        createChunks()
        window.addEventListener('resize', createChunks)
      });

      watch(categories, createChunks);
      return {
          chunks,
          selectCategory
      }
    },
});
</script>

<style scoped>
.carousel-inner {
      display: flex;
    }

    .carousel-item {
      width: 100%; /* Ensure each slide takes full width */
    }

    .carousel-category {
      flex: 0 0 12%; /* Adjust the width of each image container as needed */
      margin-right: 10px; /* Add space between images */
      text-align: center;
    }

    .carousel-category img {
      /* width: 100%; */
      /* height: auto; */
      border-radius: 5px; /* Optional: Add border-radius to images */
    }
    .carousel-control-prev, .carousel-control-next {
        width: 8% !important;
    }
.btn-outline-choco {
    --bs-btn-color: #82704A;
    --bs-btn-border-color: #82704A;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #82704A;
    --bs-btn-hover-border-color: #82704A;
    --bs-btn-focus-shadow-rgb: 13, 110, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #82704A;
    --bs-btn-active-border-color: #82704A;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #82704A;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #82704A;
    --bs-gradient: none;
}
</style>