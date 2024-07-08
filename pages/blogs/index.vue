<template>
    <div>
        <Title>Blogs with Rashm</Title>
        <Meta name="description" content="Blogs with Rashm" />
        <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search/>
            </div>
        </div>
        <div class="row bg-secondary p-1">
            <CategoriesCarousel :categories="categories"/>
        </div>
        <div class="row bg-secondary px-5 pb-5 pt-2 justify-content-center">
            <div v-for="(blog,i) in blogs" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                <BlogsCard :blog="blog"/>
            </div>
        </div>
        <div class="row bg-secondary justify-content-center pb-5">
            <Pagination/>
        </div>
    </div>
</template>
<script lang="ts">
import categoriesCarousel from "~/components/categories-carousel.vue";
import Pagination from "~/components/pagination.vue";

export default defineComponent({
    components: { categoriesCarousel, Pagination },
    setup() {
    let blogs = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        }
    ];
    let categories = [
        {
            id: 1,
            name: 'Category name'
        },
        {
            id: 2,
            name: 'Category name'
        },
        {
            id: 3,
            name: 'Category name'
        },
        {
            id: 4,
            name: 'Category name'
        },
        {
            id: 5,
            name: 'Category name'
        },
        {
            id: 6,
            name: 'Category name'
        },
        {
            id: 7,
            name: 'Category name'
        },
        {
            id: 8,
            name: 'Category name'
        },
        {
            id: 9,
            name: 'Category name'
        }
    ];
    return {
         blogs,
         categories
    }
    },
});
</script>