<template>
    <div :dir="$dir()">
        <NuxtLoadingIndicator :color="false" class="bg-choco"/>
        <Navbar/>
        <!---- output the page content ---->
        <div style="min-height: 67vh;" class="bg-secondary">
            <slot/>
        </div>
        <Footer/>
    </div>
</template>
<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: getCurrentLocale(),
  },
})
</script>