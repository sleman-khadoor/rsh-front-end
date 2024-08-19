<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                    :imgSrc="'department2'" 
                    :btnColor="'bg-yellow'"
                    :btn="true"
                    :gallery="false"
                    :text="$t('departments.proofreading.overlayImg.text')"
                    :title="$t('departments.proofreading.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.proofreading.request')" :bgColor="'bg-yellow'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <DepartmentsCard :departments="departments" :class="'col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4'"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                    :title="$t('departments.proofreading.form.title')"
                    :subTitle="$t('departments.proofreading.form.subTitle')" 
                    :color="'bg-yellow'"
                    :circleSrc="'circle-yellow'"
                    :steps="true"
                    :stepsData="stepsData"
                    :serviceName="'proofreading_service'" />
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
  title: t('departments.proofreading.overlayImg.title'), // Dynamic page title
  meta: [
    {
      name: 'description',
      content: t('departments.proofreading.overlayImg.text') // Dynamic meta description
    },
    {
      name: 'keywords',
      content: locale.value === 'ar'
          ? 'تصحيح لغوي, تدقيق نصوص, مراجعة مستندات, تصحيح أخطاء الكتابة, خدمة تدقيق لغوي, تدقيق احترافي, تدقيق نصوص دقيقة, تصحيح مقالات, تدقيق محتوى, تدقيق مستندات'
          : 'proofreading, text editing, document review, error correction, proofreading service, professional proofreading, accurate text editing, article proofreading, content review, document proofreading'
    }
  ]
});

const departments = [
    {
        title: t('departments.proofreading.departments.department1'),
        iconSrc: 'proofreading-s1'
    },
    {
        title: t('departments.proofreading.departments.department2'),
        iconSrc: 'proofreading-s2'
    },
    {
        title: t('departments.proofreading.departments.department3'),
        iconSrc: 'proofreading-s3'
    },
    {
        title: t('departments.proofreading.departments.department4'),
        iconSrc: 'proofreading-s4'
    }
];

const stepsData = [
    t('departments.proofreading.form.steps.step1'),
    t('departments.proofreading.form.steps.step2'),
    t('departments.proofreading.form.steps.step3'),
];
</script>

<style scoped>
/* Add any scoped styles for this component here */
</style>
