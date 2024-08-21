<template>
    <div id="carouselExample" class="carousel p-3" dir="ltr">
    <div class="carousel-inner w-100 m-auto btn-group" ref="carouselInner" role="group" aria-label="d-flex radio toggle button group">
        <div v-for="(chunk, index) in chunks" :key="index" :class="['carousel-item', { active: index === 0 }]">
        <div class="d-flex justify-content-center">
            <!-- <div > -->
            <div v-for="(category, subIndex) in chunk" :key="subIndex" class="carousel-category">
                 <input 
                    type="checkbox"
                    class="btn-check"
                    :class="{'bg-dark-blue': checkedValues?.includes(category)}"
                    @input="updateCheckedValues(category)"
                    v-model="checkedValues"
                    name="vbtn-radio" 
                    :id="`vbtn-radio${index}_${subIndex + 1}`" 
                    autocomplete="off">
                 <label :class="checkedValues?.includes(category) ? `btn btn-outline-choco bg-choco text-white w-100` : `btn btn-outline-choco w-100`" :for="`vbtn-radio${index}_${subIndex + 1}`">{{category.title}}</label>
            </div>
            <!-- </div> -->
        </div>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <img src="/icon/cat-prev.svg" class="d-block" alt="..." width="32" height="32" style=" transform: rotate(180deg); ">
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <img src="/icon/cat-next.svg" class="d-block" alt="..." width="32" height="32">
        <span class="visually-hidden">Next</span>
    </button>
    </div>
</template>
<script>

export default defineComponent({
    props: ['categories'],
    emits: ['updateCategory'],
    setup(props, {emit}) {
      const categories = ref(props.categories);
      const chunks = ref([]);
      const checkedValues = ref([]);
      const createChunks = () => {
        const width = window.innerWidth
        let imagesPerSlide

        if (width > 1335) {
          imagesPerSlide = 5
        } else if (width <= 1335 && width > 1100) {
          imagesPerSlide = 4
        } else if (width <= 1100 && width > 845) {
          imagesPerSlide = 3
        } else if (width <= 845 && width > 625) {
          imagesPerSlide = 2
        } else {
          imagesPerSlide = 1
        }
        chunks.value = []
        for (let i = 0; i < categories.value.length; i += imagesPerSlide) {
          chunks.value.push(categories.value.slice(i, i + imagesPerSlide));
        }
      };
      const updateCheckedValues = (category) => {
        // Emit the checked values when a checkbox is checked/unchecked
        const index = checkedValues.value.indexOf(category);
        if (index > -1) {
            checkedValues.value.splice(index, 1); // Remove if unchecked
        } else {
            checkedValues.value.push(category); // Add if checked
        }
        emit('updateCategory', checkedValues.value);
      };
      onMounted(() => {
        createChunks()
        window.addEventListener('resize', createChunks)
      });

      watch(categories, createChunks);
      return {
          chunks,
          updateCheckedValues,
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
      flex: 0 0 18%; /* Adjust the width of each image container as needed */
      margin-right: 5px; /* Add space between images */
      margin-left: 5px; /* Add space between images */
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
@media only screen and (min-width: 1335px) {

  .carousel-category {
    flex: 0 0 17.9%; /* Adjust the width of each image container as needed */
    margin-right: 5px; /* Add space between images */
    margin-left: 5px; /* Add space between images */
    text-align: center;
  }
}
@media only screen and (max-width: 1335px) {

  .carousel-category{
    flex: 0 0 22%; /* Adjust the width of each image container as needed */
    margin-right: 5px; /* Add space between images */
    margin-left: 5px; /* Add space between images */
    text-align: center;
  }
}
@media only screen and (max-width: 1100px) {

  .carousel-category{
    flex: 0 0 29%; /* Adjust the width of each image container as needed */
    margin-right: 5px; /* Add space between images */
    margin-left: 5px; /* Add space between images */
    text-align: center;
  }
}
@media only screen and (max-width: 845px) {

  .carousel-category{
    flex: 0 0 40%; /* Adjust the width of each image container as needed */
    margin-right: 5px; /* Add space between images */
    margin-left: 5px; /* Add space between images */
    text-align: center;
  }
}
@media only screen and (max-width: 625px) {

  .carousel-category{
    flex: 0 0 70%; /* Adjust the width of each image container as needed */
    margin-right: 5px; /* Add space between images */
    margin-left: 5px; /* Add space between images */
    text-align: center;
  }
}
.btn-outline-choco {
    --bs-btn-color: #82704A;
    --bs-btn-bg: #F9F9F9;
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