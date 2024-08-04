<template>
    <div class="row bg-secondary m-0">
        <Title>Blog name with Rashm</Title>
        <Meta name="description" content="Blog Name with Rashm" />
        <div class="col-12 mx-auto rounded-4 py-5 px-lg-5 px-md-5 px-sm-4 text-dark-blue">
            <img :src="url + blog.cover_image" class="d-block w-100 object-fit-cover mb-3" :alt="blog.title" height="375">
            <div class="d-flex flex-wrap mb-3" :dir="dir">
                <span v-for="cat in blog.blog_categories" class="badge text-choco bg-dark-snow font-small ff-regular m-1">{{cat.title}}</span>
            </div>
            <div class="mb-3" :dir="dir">
                <div class="d-flex justify-content-between mb-2">
                    <span class="font-large ff-meduim">{{blog.title}}</span>
                    <span class="font-small ff-regular">{{dateDayFormatter(blog.date,blog.lang)}}&nbsp;&nbsp;{{dateTimeFormatter(blog.date)}}</span>
                </div>
                <div class="mb-1">
                    <span class="font-meduim ff-regular text-choco">{{blog.writer}}</span>
                </div>
                <div>
                    <p class="text-grey font-meduim ff-regular lh-30">
                    {{blog.content}}
                    </p>
                </div>
            </div>
            <div>
                <span class="font-large ff-meduim">{{t('blogs.similarBlogs')}}</span>
                <div class="row justify-content-center">
                    <div v-for="(blog,i) in relatedBlogs" :key="i" class="col-lg-3 col-md-4 col-sm-6">
                        <BlogsCard :blog="blog"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { baseURL } from '@/utils/global';
const { slug } = useRoute().params;
const { t } = useI18n();
const url = ref(baseURL);
const runTimeConfig = useRuntimeConfig();
const setI18nParams = useSetI18nParams();
const switchLocalePath = useSwitchLocalePath();
const blog = ref({});
const relatedBlogs = ref([]);
const dir = computed(()=> {
  return blog.value?.lang === 'ar' ? 'rtl' : 'ltr'
})
const getBlog = async () => {
  try {
    const response = await $fetch(`${runTimeConfig.public.API_URL}/blogs/${slug}`, {
      headers: API_HEADER(),
    });
    blog.value = response.data;
    relatedBlogs.value = response.related_blogs;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

onMounted(async () => {
  if (process.client) {
    url.value = baseURL;
  }
  const blog = await getBlog();
});
</script>
