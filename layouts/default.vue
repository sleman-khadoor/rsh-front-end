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
<script setup>
const { locale } = useI18n();
const pageTitle = computed(() => {
  return locale.value === 'ar'
    ? 'رشم | استكشف أحدث الأخبار والخدمات والكتب والمدونات'
    : 'Rashm | Explore the Latest News, Services, Books, and Blogs';
});

const pageDescription = computed(() => {
  return locale.value === 'ar'
    ? 'استكشف أحدث الأخبار والخدمات والكتب والمدونات على موقع رشم. اكتشف كل ما هو جديد في عالم الكتب والخدمات معنا.'
    : 'Explore the latest news, services, books, and blogs on Rashm. Discover what’s new in the world of books and services with us.';
});

const pageKeywords = computed(() => {
  return locale.value === 'ar'
    ? 'رشم, أخبار, خدمات, كتب, مدونات, مكتبة,متجر إلكتروني ,كتاب'
    : 'Rashm, News, Services, Books, Blogs, Library, Book Store, Book';
});
useHead({
  htmlAttrs: {
    lang: getCurrentLocale(),
  },
  title: pageTitle.value,
  meta: [
    { name: 'description', content: pageDescription.value },
    { name: 'keywords', content: pageKeywords.value }
  ],
  link: [
    { rel: 'canonical', href: 'https://rashm.com.sa/' }
  ]
})
</script>