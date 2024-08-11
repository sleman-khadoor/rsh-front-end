<template>
     <div class="row bg-secondary m-0">
        <Title>Content Writing with Rashm</Title>
        <Meta name="description" content="Content Writing with Rashm" />
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                 :imgSrc="'department6'" 
                 :btnColor="'bg-light-blue'"
                 :btn="true"
                 :gallery="false"
                 :text="$t('departments.contentWriting.overlayImg.text')"
                 :title="$t('departments.contentWriting.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.contentWriting.request')" :bgColor="'bg-light-blue'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc" :subTitle="''"/>
                </div>
            </div>
            <div class="row mx-auto bg-primary justify-content-around rounded-4 p-5 pt-0 mb-3">
                    <div class="font-x-large ff-meduim text-dark-blue text-center my-5">{{t('departments.contentWriting.types.title')}}</div>
                    <DepartmentsTypesOfContent :contents="contents"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.contentWriting.form.title')" 
                :subTitle="$t('departments.contentWriting.form.subTitle')" 
                :color="'bg-light-blue'" 
                :circleSrc="'circle-light-blue'"
                :steps="true"
                :stepsData="stepsData"
                :serviceName="'content_writing_service'" />
            </div>
        </div>
        </div>
</template>
<script lang="ts">
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
    const { t } = useI18n();
    let departments = [
        {
            title: t('departments.contentWriting.departments.department1'),
            iconSrc: 'contentWriting-s1'
        },
        {
            title: t('departments.contentWriting.departments.department2'),
            iconSrc: 'contentWriting-s2'
        },
        {
            title: t('departments.contentWriting.departments.department3'),
            iconSrc: 'contentWriting-s3'
        },
        {
            title: t('departments.contentWriting.departments.department4'),
            iconSrc: 'contentWriting-s4'
        }
    ];
    let contents = [
        {
            imgSrc: '5',
            title: t('departments.contentWriting.types.type1.title'),
            text: t('departments.contentWriting.types.type1.subTitle'),
            class: 'col-lg-3 my-1 px-1',
        },
        {
            imgSrc: '4',
            title: t('departments.contentWriting.types.type2.title'),
            text: t('departments.contentWriting.types.type2.subTitle'),
            class: 'col-lg-6 my-1 px-1',
        },
        {
            imgSrc: '3',
            title: t('departments.contentWriting.types.type3.title'),
            text: t('departments.contentWriting.types.type3.subTitle'),
            class: 'col-lg-3 my-1 px-1',
        },
        {
            imgSrc: '2',
            title: t('departments.contentWriting.types.type4.title'),
            text: t('departments.contentWriting.types.type4.subTitle'),
            class: 'col-lg-6 my-1 px-1',
        },
        {
            imgSrc: '1',
            title: t('departments.contentWriting.types.type5.title'),
            text: t('departments.contentWriting.types.type5.subTitle'),
            class: 'col-lg-6 my-1 px-1',
        },
    ]
    let stepsData = [
        t('departments.contentWriting.form.steps.step1'),
        t('departments.contentWriting.form.steps.step2'),
        t('departments.contentWriting.form.steps.step3'),
    ]
    return {
         t,
         departments,
         contents,
         stepsData
    }
    },
});
</script>
