<template>
     <div class="row bg-secondary m-0">
        <Title>literary Agency Authors with Rashm</Title>
        <Meta name="description" content="literary Agency Authors with Rashm" />
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
            <div class="row mx-auto bg-primary justify-content-around rounded-4 py-5 mb-3">
                <div class="font-x-large ff-meduim text-dark-blue text-center mb-3">{{t('departments.literaryAgencyAuthors.representedAuthor')}} <span class="text-choco">{{t('footer.title')}}</span></div>
                <DepartmentsAuthorCard/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.literaryAgencyAuthors.request')" :bgColor="'bg-choco'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc" :subTitle="''"/>
                </div>
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
<script lang="ts">
import { useI18n } from 'vue-i18n';

export default defineComponent({
    async setup() {
    const { t } = useI18n();
    let departments = [
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
    let stepsData = [
        t('departments.literaryAgencyAuthors.form.steps.step1'),
        t('departments.literaryAgencyAuthors.form.steps.step2'),
        t('departments.literaryAgencyAuthors.form.steps.step3'),
        t('departments.literaryAgencyAuthors.form.steps.step4'),
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
