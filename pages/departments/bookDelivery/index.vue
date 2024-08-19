<template>
     <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                 :imgSrc="'department7'" 
                 :btnColor="'bg-tial'"
                 :btn="true"
                 :gallery="false"
                 :text="$t('departments.bookDelivery.overlayImg.text')"
                 :title="$t('departments.bookDelivery.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.bookDelivery.request')" :bgColor="'bg-tial'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <DepartmentsCard :departments="departments" :class="'col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4'"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.bookDelivery.form.title')" 
                :subTitle="$t('departments.bookDelivery.form.subTitle')" 
                :color="'bg-tial'" 
                :circleSrc="'circle-tial'"
                :steps="true"
                :stepsData="stepsData"
                :serviceName="'book_delivery_service'" />
            </div>
        </div>
        </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

// Define dynamic metadata
useHead({
  title: t('departments.bookDelivery.overlayImg.title'), // Dynamic page title
  meta: [
    {
      name: 'description',
      content: t('departments.bookDelivery.overlayImg.text') // Dynamic meta description
    },
    {
        name: 'keywords',
        content: locale.value === 'ar'
            ? 'إخراج الكتب, خدمة توصيل الكتب, خدمات الشحن, توصيل سريع للكتب, خدمة الكتب, إخراج كتب احترافي, شحن كتب, خدمات التوصيل, توصيل كتب بجودة عالية, خدمة إخراج الكتب'
            : 'book delivery, book shipping services, fast book delivery, professional book delivery, book shipping, delivery services, high-quality book delivery, book service, reliable book delivery, book courier services'
    }
  ]
});

const departments = [
  {
    title: t('departments.bookDelivery.departments.department1'),
    iconSrc: 'bookDelivery-s1'
  },
  {
    title: t('departments.bookDelivery.departments.department2'),
    iconSrc: 'bookDelivery-s2'
  },
  {
    title: t('departments.bookDelivery.departments.department3'),
    iconSrc: 'bookDelivery-s3'
  },
  {
    title: t('departments.bookDelivery.departments.department4'),
    iconSrc: 'bookDelivery-s4'
  }
];

const stepsData = [
  t('departments.bookDelivery.form.steps.step1'),
  t('departments.bookDelivery.form.steps.step2'),
  t('departments.bookDelivery.form.steps.step3'),
  t('departments.bookDelivery.form.steps.step4'),
];
</script>
