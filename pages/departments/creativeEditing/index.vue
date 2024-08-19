<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                    :imgSrc="'department3'" 
                    :btnColor="'bg-purple'"
                    :btn="true"
                    :gallery="false"
                    :text="$t('departments.creativeEditing.overlayImg.text')"
                    :title="$t('departments.creativeEditing.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.creativeEditing.request')" :bgColor="'bg-purple'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <DepartmentsCard :departments="departments" :class="'col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4'"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                    :title="$t('departments.creativeEditing.form.title')" 
                    :subTitle="$t('departments.creativeEditing.form.subTitle')" 
                    :color="'bg-purple'" 
                    :circleSrc="'circle-purple'"
                    :steps="true"
                    :stepsData="stepsData"
                    :serviceName="'creative_editing_service'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '#app';

const { t, locale } = useI18n();

// Set dynamic page metadata
useHead({
  title: t('departments.creativeEditing.overlayImg.title'), // Dynamic page title
  meta: [
    {
      name: 'description',
      content: t('departments.creativeEditing.overlayImg.text') // Dynamic meta description
    },
    {
    name: 'keywords',
    content: locale.value === 'ar'
        ? 'تحرير إبداعي, خدمات تحرير, تحرير محتوى, تحرير كتب, تحسين النصوص, خدمات الكتابة, تدقيق لغوي, تحرير أدبي, خدمات تحرير إبداعي, تحرير وتنسيق'
        : 'creative editing, editing services, content editing, book editing, text enhancement, writing services, proofreading, literary editing, creative editing services, editing and formatting'
}
  ]
});

const departments = [
    {
        title: t('departments.creativeEditing.departments.department1'),
        iconSrc: 'creativeEditing-s1'
    },
    {
        title: t('departments.creativeEditing.departments.department2'),
        iconSrc: 'creativeEditing-s2'
    },
    {
        title: t('departments.creativeEditing.departments.department3'),
        iconSrc: 'creativeEditing-s3'
    }
];

const stepsData = [
    t('departments.creativeEditing.form.steps.step1'),
    t('departments.creativeEditing.form.steps.step2'),
    t('departments.creativeEditing.form.steps.step3'),
];
</script>
