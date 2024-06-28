<template>
    <div>
        <div class="row bg-dark-blue pb-3">
            <div class="col-lg-7 h-25 mx-auto">
                <Search/>
            </div>
        </div>
        <div class="row bg-secondary p-5 justify-content-center">
            <div v-for="i in 10" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                <BlogsCard/>
            </div>
        </div>
    </div>
</template>