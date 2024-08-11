<template>
    <div>
        <div class="row bg-dark-blue p-5 text-primary justify-content-between m-0">
            <div class="col-lg-5 col-md-5 col-sm-12 mb-1 row">
                <div class="text-meduim ff-bold lh-22">
                    <img src="/icon/logo-white.svg" alt="rashm" height="59" width="36" class="mb-2">
                    <span class="mx-3">{{t('footer.title')}}</span>
                </div>
                <div class="text-small ff-regular text-white-gray">{{t('footer.rashm')}}</div>
                <div class="d-flex my-3">
                    <a v-for="contact in socialMedia" :key="contact" :href="contact.value" target="_blank">
                        <img  :src="`/icon/${contact.type}.svg`" :alt="`rashm ${contact.type}`" height="21" width="21" class="mx-2">
                    </a>
                </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 justify-content-between">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6 w-50">
                <ul class="p-0">
                     <li class="font-small lh-30 ff-bold">{{t('footer.pages')}}</li>
                    <li v-for="page in pages" class="font-xx-small lh-25 ff-regular text-white-gray">
                      <NuxtLink style="text-decoration: unset !important" class="text-white-gray" :to="localePath(page.link)">
                        {{t(`navbar.${page.title}`)}}
                      </NuxtLink>
                    </li>
                </ul>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6 w-50">
                <ul class="p-0">
                    <li class="font-small lh-30 ff-bold">{{t('footer.departments')}}</li>
                    <li  v-for="service in services" class="font-xx-small lh-25 ff-regular text-white-gray">
                      <NuxtLink style="text-decoration: unset !important" class="text-white-gray" :to="localePath(service.link)">
                        {{t(`departments.${service.title}.overlayImg.title`)}}
                      </NuxtLink>
                    </li>
                </ul>
            </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-12 justify-content-center">
                <ul class="p-0">
                    <li class="font-small lh-30 ff-bold">{{t('footer.contact')}}</li>
                    <li v-for="contact in contactInfo" :key="contact" class="font-xx-small lh-25 ff-regular text-white-gray">
                        <img :src="`/icon/${contact.type}-mini.svg`" alt="rashm" height="20" width="20">
                        <span dir="ltr" class="mx-1">{{contact.value}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script setup>
import { API_HEADER } from '@/utils/global';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Get runtime configuration
const runTimeConfig = useRuntimeConfig();

const pages = ref([
  {
    link: '/',
    title: 'home'
  },
  {
    link: '/about-us',
    title: 'aboutUs'
  },
  {
    link: '/',
    title: 'departments'
  },
  {
    link: '/blogs',
    title: 'blogs'
  },
  {
    link: '/books',
    title: 'books'
  },
  {
    link: '/partners',
    title: 'ourPartners'
  },
  {
    link: '/publish-with-us',
    title: 'publishWithUs'
  },
  {
    link: '/contact-us',
    title: 'contactUs'
  },
]);

const services = ref([
  {
    link: '/departments/translation',
    title: 'translation',
  },
  {
    link: '/departments/proofreading',
    title: 'proofreading',
  },
  {
    link: '/departments/creativeEditing',
    title: 'creativeEditing',
  },
  {
    link: '/departments/literaryAgencyAuthors',
    title: 'literaryAgencyAuthors',
  },
  {
    link: '/departments/marketing',
    title: 'marketing', 
  },
  {
    link: '/departments/contentWriting',
    title: 'contentWriting',
  },
  {
    link: '/departments/bookDelivery',
    title: 'bookDelivery',
  },
  {
    link: '/departments/organizingEventsAndConferences',
    title: 'organizingEventsandConferences',
  },
]);

const contacts = ref([]);
const contactsPending = ref(false);
const contactsError = ref(null);
const contactInfo = computed(() => {
  return contacts.value.filter((e) => (e.type !== 'twitter' && e.type !== 'instagram' && e.type !== 'linkedIn' && e.type !== 'facebook' && e.type !== 'en_location' && e.type !== 'ar_location' && e.type !== 'shop_url'))
});
const socialMedia = computed(() => {
  return contacts.value.filter((e) => (e.type !== 'phone' && e.type !== 'email' && e.type !== 'en_location' && e.type !== 'ar_location' && e.type !== 'shop_url'))
});
const headers = ref({});

// Fetch data function
const fetchData = async (url, dataRef, pendingRef, errorRef) => {
  pendingRef.value = true;
  errorRef.value = null;

  try {
    const response = await $fetch(`${runTimeConfig.public.API_URL}/${url}`, {
      headers: headers.value,
    });
    dataRef.value = response.data;
  } catch (error) {
    errorRef.value = error;
    console.error(`Error fetching ${url}:`, error);
  } finally {
    pendingRef.value = false;
  }
};

// Fetch data on component mount
onMounted(async () => {
  headers.value = API_HEADER(); // Set headers in the setup context
  try {
    await fetchData('contacts', contacts, contactsPending, contactsError);
  } catch (error) {
    console.error('Error during onMounted fetch:', error);
  }
});
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>