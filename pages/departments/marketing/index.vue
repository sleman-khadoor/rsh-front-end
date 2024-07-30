<template>
     <div class="row bg-secondary m-0">
        <Title>Marketing with Rashm</Title>
        <Meta name="description" content="Marketing with Rashm" />
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-3">
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
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 pt-2 pb-3 px-4 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc" :subTitle="''"/>
                </div>
            </div>
            <div id="contacts" class="mx-auto bg-primary text-center rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.marketing.form.title')" 
                :subTitle="$t('departments.marketing.form.subTitle')" 
                :color="'bg-green'"
                :circleSrc="'circle-green'" 
                :steps="true"
                :serviceName="'marketing'" />
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
            title: t('departments.marketing.departments.department1'),
            iconSrc: 'marketing-s1'
        },
        {
            title: t('departments.marketing.departments.department2'),
            iconSrc: 'marketing-s2'
        }
    ]
    return {
         t,
         departments
    }
    },
});
</script>
