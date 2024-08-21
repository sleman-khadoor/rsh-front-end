<template>
    <div>
        <div class="row bg-secondary m-0">
            <div class="col-11 mx-auto my-5 rounded-4">
                <div class="mb-3 text-center">
                    <DepartmentsOverlayImg 
                    :imgSrc="'contact-us'" 
                    :gallery="false"
                    :btn="false"
                    :btnColor="''"
                    :text="$t('contactUs.overlayImg.text')"
                    :title="$t('contactUs.overlayImg.title')"/>
                </div>
                <div class="mb-3 mx-auto bg-primary rounded-4 py-2">
                    <ContactUsForm :color="'bg-choco'" :title="$t('contactUs.title')" :subTitle="$t('contactUs.subTitle')" :steps="false" :circleSrc="''"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { useHead } from '@unhead/vue';

// Set up i18n for localization
const { t, locale } = useI18n();

// Set head elements based on locale
useHead({
  title: locale.value === 'ar'
    ? 'رشم | تواصل معنا'
    : 'Rashm | Contact Us',
  meta: [
    { 
      name: 'description', 
      content: locale.value === 'ar'
        ? 'اتصل بنا من خلال موقع رشم. نحن هنا لمساعدتك والإجابة على استفساراتك بشأن خدماتنا ومنتجاتنا.'
        : 'Contact us through Rashm. We are here to assist you and answer your inquiries about our services and products.'
    },
    { 
      name: 'keywords', 
      content: locale.value === 'ar'
        ? 'اتصل بنا, رشم, استفسار, خدمات, منتجات'
        : 'contact, Rashm, inquiry, services, products'
    }
  ],
   link: [
     { rel: 'canonical', href: 'https://rashm.com.sa/contact-us' }
  ]
});
</script>