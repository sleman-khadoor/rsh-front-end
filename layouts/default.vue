<template>
    <div :dir="$dir()">
        <NuxtLoadingIndicator :color="false" class="bg-choco"/>
        <Navbar/>
        <!---- output the page content ---->
        <div>
            <slot/>
        </div>
        <Footer/>
    </div>
</template>