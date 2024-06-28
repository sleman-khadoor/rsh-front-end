<template>
    <div class="col-12 pt-4 pb-4">
        <div class="bg-primary rounded-4">
            <div class="font-x-large weight-meduim text-dark-blue text-center pt-5">Check our latest <span class="text-choco">Blogs</span></div>
            <div class="row p-5 justify-content-center items-center">
                <div v-for="i in 6" :key="i" class="col-lg-4 col-md-4 col-sm-6 mb-3">
                    <div class="card  bg-secondary border-0">
                    <img src="@/assets/img/blog.jpg" class="card-img-top" alt="..." width="336" height="250">
                        <div class="card-body">
                            <div class="row justify-content-between mb-2">
                                <span class="text-choco font-small weight-regular col text-start">Author Name</span>
                                <span class="text-dark-blue font-xx-small weight-regular col text-end">08.08.2021</span>
                            </div>
                            <div class="d-flex">
                                <span class="text-choco font-x-small col text-start mx-1">
                                    <img src="@/assets/icon/blog-book.svg" alt="..." width="15" height="15">
                                </span>
                                <p class="text-dark-blue font-small weight-regular">Richird Norton photorealistic rendering as real photos.</p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    </div>
</template>
