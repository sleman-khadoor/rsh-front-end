<template>
    <div class="row bg-secondary m-0">
        <Title>Blog name with Rashm</Title>
        <Meta name="description" content="Blog Name with Rashm" />
        <div class="col-12 mx-auto text-start rounded-4 py-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <img src="@/assets/img/blog-img.jpg" class="d-block w-100 object-fit-cover mb-3" alt="..." height="310">
            <div class="d-flex flex-wrap mb-3">
                <span class="badge text-choco bg-dark-snow font-small ff-regular m-1">History</span>
                <span class="badge text-choco bg-dark-snow font-small ff-regular m-1">History</span>
                <span class="badge text-choco bg-dark-snow font-small ff-regular m-1">History</span>
                <span class="badge text-choco bg-dark-snow font-small ff-regular m-1">History</span>
                <span class="badge text-choco bg-dark-snow font-small ff-regular m-1">History</span>
            </div>
            <div>
                <div class="d-flex justify-content-between mb-2">
                    <span class="font-large ff-meduim">Here we write the blog title</span>
                    <span class="font-small ff-regular">Monady At 08.08.2021</span>
                </div>
                <div class="mb-1">
                    <span class="font-meduim ff-regular text-choco">Author Name</span>
                </div>
                <div>
                    <p class="text-grey font-meduim ff-regular lh-22">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                        2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in
                        45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                        sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
                        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form,
                        accompanied by English versions from the 1914 translation by H. Rackham.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                        2000 years old. Richard McClintock a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source
                        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in
                        45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor.
                    </p>
                </div>
            </div>
            <div>
                <span class="font-large ff-meduim">Similar Blogs</span>
                <div class="row justify-content-center">
                    <div v-for="(blog,i) in blogs" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                        <BlogsCard :blog="blog"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { id } = useRoute().params
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
        }
    ];
</script>