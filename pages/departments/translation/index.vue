<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                    :imgSrc="'department1'" 
                    :btnColor="'bg-blue'"
                    :gallery="false"
                    :btn="true"
                    :text="$t('departments.translation.overlayImg.text')"
                    :title="$t('departments.translation.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.translation.request')" :bgColor="'bg-blue'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around align-items-stretch rounded-4 pt-2 pb-3 px-4 mb-3">
                <DepartmentsCard :departments="departments" :class="'col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4'"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                    :title="$t('departments.translation.form.title')" 
                    :subTitle="$t('departments.translation.form.subTitle')" 
                    :color="'bg-blue'" 
                    :circleSrc="'circle-blue'"
                    :steps="true"
                    :stepsData="stepsData"
                    :serviceName="'translation_service'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '#app';

// Setup i18n
const { t, locale } = useI18n();

// Define dynamic metadata
useHead({
  title: t('departments.translation.overlayImg.title'), // Dynamic page title
  meta: [
    {
      name: 'description',
      content: t('departments.translation.overlayImg.text') // Dynamic meta description
    },
    {
      name: 'keywords',
      content: locale.value === 'ar'
          ? 'ترجمة, خدمات ترجمة, ترجمة احترافية, ترجمة نصوص, ترجمة مستندات, ترجمة فورية, ترجمة دقيقة, مكتب ترجمة, خدمة ترجمة احترافية, ترجمة عالية الجودة'
          : 'translation, translation services, professional translation, text translation, document translation, interpretation, accurate translation, translation office, professional translation service, high-quality translation'
    }
  ]
});

const departments = [
    {
        title: t('departments.translation.departments.department1'),
        iconSrc: 'translation-s1'
    },
    {
        title: t('departments.translation.departments.department2'),
        iconSrc: 'translation-s2'
    },
    {
        title: t('departments.translation.departments.department3'),
        iconSrc: 'translation-s3'
    },
    {
        title: t('departments.translation.departments.department4'),
        iconSrc: 'translation-s4'
    }
];

const stepsData = [
    t('departments.translation.form.steps.step1'),
    t('departments.translation.form.steps.step2'),
    t('departments.translation.form.steps.step3'),
];
</script>

<style scoped>
/* Add any scoped styles for this component here */
</style>
