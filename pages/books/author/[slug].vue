<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto mt-5 bg-primary rounded-4 pt-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <div class="row p-0 pb-5 px-4">
                <BooksAuthor :author="author"/>
            </div>
        </div>
        <div v-if="books && books.length" class="col-11 mx-auto my-4 bg-primary rounded-4 pt-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center px-4">{{$t('departments.literaryAgencyAuthors.author.publications')}}</div>
            <div class="row p-0 pb-5 px-4 justify-content-center">
                <div v-for="(book,i) in books" :key="i" class="col-lg-3 col-md-4 col-sm-6 my-3">
                    <BooksCard :book="book"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const { slug } = useRoute().params;
const { locale } = useI18n();
const runTimeConfig = useRuntimeConfig();
const setI18nParams = useSetI18nParams();
const switchLocalePath = useSwitchLocalePath();
const authorName = ref('');
const books = ref([]);
const { data: author, pending: authorPending, refresh: authorRefresh} = await useFetch(`${runTimeConfig.public.API_URL}/authors/${slug}`, {
        transform: (_author) => _author.data,
        headers: API_HEADER(),
        query: {
            include: ['books']
        },
        onResponse({ request, response, options }) {
            // Process the response data
            setI18nParams({
                en:  { slug: response._data.data.slug.en} , // slug: 'red-mug'
                ar:  { slug: response._data.data.slug.ar}  // slug: 'rode-mok'
            })
            switchLocalePath('en') // /products/red-mug
            switchLocalePath('ar') // /nl/products/rode-mok
            authorName.value = response._data.data.name;
            books.value = response._data.data.books;
        },
});
useHead({
  title: locale.value === 'ar' 
    ? `المؤلف ${authorName.value} | رشم`
    : `Author ${authorName.value} | Rashm`,
  meta: [
    { 
      name: 'description', 
      content: locale.value === 'ar' 
        ? `تعرف على مؤلفات وأعمال المؤلف ${authorName.value} في مكتبة رشم.`
        : `Explore the works and publications of author ${authorName.value} at Rashm Library.`
    },
    { 
      name: 'keywords', 
      content: locale.value === 'ar' 
        ? `${authorName.value}, مؤلف, كتب, مكتبة, أدب, رشم`
        : `${authorName.value}, author, books, library, literature, Rashm`
    }
  ],
  link: [
            { rel: 'canonical', href: computed(() => `https://rashm.com.sa/books/author/${slug}`)  }
  ]
})
</script>