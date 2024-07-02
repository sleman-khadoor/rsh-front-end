<template>
    <div>
        <Title>Blogs with Rashm</Title>
        <Meta name="description" content="Blogs with Rashm" />
        <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search/>
            </div>
        </div>
        <div class="row bg-secondary p-5 justify-content-center">
            <div v-for="(blog,i) in blogs" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                <BlogsCard :blog="blog"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
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
    return {
         blogs
    }
    },
});
</script>