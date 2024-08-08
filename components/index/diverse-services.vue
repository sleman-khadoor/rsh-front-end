<template>
    <div class="col-12 pt-4 pb-4">
        <div class="bg-primary rounded-4">
            <div class="font-x-large ff-meduim text-dark-blue text-center pt-5">{{t('index.departmentsTitle1')}} <span class="text-choco">{{t('index.departmentsTitle2')}}</span> {{t('index.departmentsTitle3')}}</div>
            <div class="row p-5 justify-content-center align-items-stretch items-center">
                <div v-for="(department, i) in departments" :key="i" class="col-lg-4 col-md-6 col-sm-6 mb-4">
                    <NuxtLink :to="localePath(`/departments/${department.icon}`)" class="no-underline">
                    <div class="card bg-secondary border-0 h-100 rounded-3">
                    <div class="card-body my-3">
                        <div class="d-flex justify-content-start mb-3">
                                <img :src="`/icon/${department.icon}.svg`" alt="rashm" height="41" width="41"/>
                             <span class="text-dark-blue font-large ff-meduim px-2 my-auto">{{department.title}}</span>
                        </div>
                        
                        <p class="card-text text-grey font-small ff-regular lh-22">
                            {{department.text}}
                        </p>
                    </div>
                    </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useI18n } from 'vue-i18n';
export default defineComponent({
    setup() {
        const { t } = useI18n();
        let departments = [
            {
                icon: 'translation',
                title: t('index.departments.department1.title'),
                text: t('index.departments.department1.text'),
            },
            {
                icon: 'proofreading',
                title: t('index.departments.department2.title'),
                text: t('index.departments.department2.text'),
            },
            {
                icon: 'creativeEditing',
                title: t('index.departments.department3.title'),
                text: t('index.departments.department3.text'),
            },
            {
                icon: 'literaryAgencyAuthors',
                title: t('index.departments.department4.title'),
                text: t('index.departments.department4.text'),
            },
            {
                icon: 'marketing',
                title: t('index.departments.department5.title'),
                text: t('index.departments.department5.text'),
            },
            {
                icon: 'contentWriting',
                title: t('index.departments.department6.title'),
                text: t('index.departments.department6.text'),
            },
            {
                icon: 'bookDelivery',
                title: t('index.departments.department7.title'),
                text: t('index.departments.department7.text'),
            },
            {
                icon: 'organizingEventsAndConferences',
                title: t('index.departments.department8.title'),
                text: t('index.departments.department8.text'),
            },
        ]
        return {
            t,
            departments
        }        
    },
})
</script>
<style scoped>
.square {
  height: 2.3rem !important;
  width: 2.3rem !important;
  justify-content: center !important;
  align-items: center !important;
}
</style>