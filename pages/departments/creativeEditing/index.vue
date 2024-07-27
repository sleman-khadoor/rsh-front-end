<template>
     <div class="row bg-secondary m-0">
        <Title>Creative Editing with Rashm</Title>
        <Meta name="description" content="Creative Editing with Rashm" />
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-3">
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
            <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 p-5 mb-3">
                <div v-for="(department,i) in departments" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                    <DepartmentsCard :title="department.title" :iconSrc="department.iconSrc" :subTitle="''"/>
                </div>
            </div>
            <div id="contacts" class="mx-auto bg-primary text-center rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.creativeEditing.form.title')" 
                :subTitle="$t('departments.creativeEditing.form.subTitle')" 
                :color="'bg-purple'" 
                :circleSrc="'circle-purple'"
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
    return {
         t,
         departments
    }
    },
});
</script>
