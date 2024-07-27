<template>
     <div class="row bg-secondary m-0">
        <Title>Proofreading With Rashm</Title>
        <Meta name="description" content="Proofreading with Rashm" />
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-3">
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
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 p-5 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc" :subTitle="''"/>
                </div>
            </div>
            <div id="contacts" class="mx-auto bg-primary text-center rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.proofreading.form.title')"
                :subTitle="$t('departments.proofreading.form.subTitle')" 
                :color="'bg-yellow'"
                :circleSrc="'circle-yellow'"
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
    return {
         t,
         departments
    }
    },
});
</script>
