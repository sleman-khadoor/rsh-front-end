<template>
     <div class="row bg-secondary m-0">
        <Title>Content Writing with Rashm</Title>
        <Meta name="description" content="Content Writing with Rashm" />
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-3">
                <DepartmentsOverlayImg 
                 :imgSrc="'department6'" 
                 :btnColor="'bg-light-blue'"
                 :btn="true"
                 :text="$t('departments.contentWriting.overlayImg.text')"
                 :title="$t('departments.contentWriting.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.contentWriting.request')" :bgColor="'bg-light-blue'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 p-5 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc"/>
                </div>
            </div>
            <div class="row mx-auto bg-primary justify-content-around rounded-4 p-5 mb-3">
                    <DepartmentsTypesOfContent :contents="contents"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary text-center rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.contentWriting.form.title')" 
                :subTitle="$t('departments.contentWriting.form.subTitle')" 
                :color="'bg-light-blue'" 
                :circleSrc="'circle-light-blue'"
                :steps="true" />
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
            imgSrc: '1',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-3 my-1 px-1',
        },
        {
            imgSrc: '2',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-6 my-1 px-1',
        },
        {
            imgSrc: '3',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-3 my-1 px-1',
        },
        {
            imgSrc: '4',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-6 my-1 px-1',
        },
        {
            imgSrc: '5',
            title: 'Social media content',
            text: 'Posts on Facebook, Twitter Instagram and other platforms',
            class: 'col-lg-6 my-1 px-1',
        },
    ]
    return {
         t,
         departments,
         contents
    }
    },
});
</script>
