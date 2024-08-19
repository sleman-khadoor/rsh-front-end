<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                    :imgSrc="'department4'" 
                    :btnColor="'bg-choco'"
                    :btn="true"
                    :gallery="false"
                    :text="$t('departments.literaryAgencyAuthors.overlayImg.text')"
                    :title="$t('departments.literaryAgencyAuthors.overlayImg.title')"/>
            </div>
            <div>
                <DepartmentsAuthorCard/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.literaryAgencyAuthors.request')" :bgColor="'bg-choco'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <DepartmentsCard :departments="departments" :class="'col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4'"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                    :title="$t('departments.literaryAgencyAuthors.form.title')" 
                    :subTitle="$t('departments.literaryAgencyAuthors.form.subTitle')" 
                    :color="'bg-choco'" 
                    :circleSrc="'circle-choco'"
                    :steps="true"
                    :stepsData="stepsData"
                    :serviceName="'literary_agency_service'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '#app';

// Setup i18n
const { t, locale } = useI18n();

// Set page metadata dynamically
useHead({
    title: t('departments.literaryAgencyAuthors.overlayImg.title'), // Dynamic page title
    meta: [
        {
            name: 'description',
            content: t('departments.literaryAgencyAuthors.overlayImg.text') // Dynamic meta description
        },
        {
            name: 'keywords',
            content: locale.value === 'ar'
                ? 'وكالة أدبية, خدمات الأدباء, نشر كتب, تسويق أدبي, استشارات أدبية, وكالة أدبية للمؤلفين, إدارة مشاريع أدبية, دعم المؤلفين, خدمات نشر, تطوير كتب'
                : 'literary agency, author services, book publishing, literary marketing, literary consulting, author agency, literary project management, author support, publishing services, book development'
        }
    ]
});

// Data for the component
const departments = [
    {
        title: t('departments.literaryAgencyAuthors.departments.department1'),
        iconSrc: 'literaryAgencyAuthors-s1'
    },
    {
        title: t('departments.literaryAgencyAuthors.departments.department2'),
        iconSrc: 'literaryAgencyAuthors-s2'
    },
    {
        title: t('departments.literaryAgencyAuthors.departments.department3'),
        iconSrc: 'literaryAgencyAuthors-s3'
    }
];

const stepsData = [
    t('departments.literaryAgencyAuthors.form.steps.step1'),
    t('departments.literaryAgencyAuthors.form.steps.step2'),
    t('departments.literaryAgencyAuthors.form.steps.step3'),
    t('departments.literaryAgencyAuthors.form.steps.step4'),
];
</script>

<style scoped>
/* Add any scoped styles for this component here */
</style>
