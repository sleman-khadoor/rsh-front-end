<template>
    <div>
        <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search/>
            </div>
        </div>
        <div class="row bg-secondary p-5 justify-content-center">
            <div v-for="(book,i) in books" :key="i" class="col-lg-2 col-md-4 col-sm-6">
                <BooksCard :book="book"/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    setup() {
    let books = [
        {
            id: 1,
            iconSrc: 'bookDelivery-s1'
        },
        {
            id: 2,
            iconSrc: 'bookDelivery-s2'
        },
        {
            id: 3,
            iconSrc: 'bookDelivery-s3'
        },
        {
            id: 4,
            iconSrc: 'bookDelivery-s4'
        },
        {
            id: 5,
            iconSrc: 'bookDelivery-s2'
        },
        {
            id: 6,
            iconSrc: 'bookDelivery-s3'
        },
        {
            id: 7,
            iconSrc: 'bookDelivery-s4'
        }
    ];
    return {
         books
    }
    },
});
</script>