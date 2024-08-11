<template>
     <div class="row bg-secondary m-0">
        <Title>Marketing with Rashm</Title>
        <Meta name="description" content="Marketing with Rashm" />
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                 :imgSrc="'department5'" 
                 :btn="true"
                 :gallery="false"
                 :btnColor="'bg-green'"
                 :text="$t('departments.marketing.overlayImg.text')"
                 :title="$t('departments.marketing.overlayImg.title')"/>
            </div>
            <div class="mb-3">
                <ColourfullDiv :text="$t('departments.marketing.request')" :bgColor="'bg-green'"/>
            </div>
            <div class="row mx-auto bg-primary text-center justify-content-center rounded-4 pt-2 pb-3 px-4 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc" :subTitle="''"/>
                </div>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.marketing.form.title')" 
                :subTitle="$t('departments.marketing.form.subTitle')" 
                :color="'bg-green'"
                :circleSrc="'circle-green'" 
                :steps="true"
                :stepsData="stepsData"
                :serviceName="'marketing_service'" />
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
            title: t('departments.marketing.departments.department2'),
            iconSrc: 'marketing-s2'
        },
        {
            title: t('departments.marketing.departments.department5'),
            iconSrc: 'marketing-s5'
        },
        {
            title: t('departments.marketing.departments.department1'),
            iconSrc: 'marketing-s1'
        },
        {
            title: t('departments.marketing.departments.department4'),
            iconSrc: 'marketing-s4'
        },
        {
            title: t('departments.marketing.departments.department3'),
            iconSrc: 'marketing-s3'
        },
        
    ]
    let stepsData = [
        t('departments.marketing.form.steps.step1'),
        t('departments.marketing.form.steps.step2'),
        t('departments.marketing.form.steps.step3'),
        t('departments.marketing.form.steps.step4'),
    ]
    return {
         t,
         departments,
         stepsData
    }
    },
});
</script>
