<template>
    <div class="col-12 pt-4 pb-4">
        <div class="bg-primary rounded-4">
            <div class="font-x-large ff-meduim text-dark-blue text-center pt-5">Discover <span class="text-choco">Rashm's</span> diverse services</div>
            <div class="row p-5 justify-content-center align-align-items-stretch items-center">
                <div v-for="(department, i) in departments" :key="i" class="col-lg-4 col-md-4 col-sm-6 mb-4">
                    <div class="card bg-secondary border-0 h-100">
                    <div class="card-body my-3">
                        <div class="d-flex justify-content-start mb-3">
                                <img :src="`_nuxt/assets/icon/${department.icon}.svg`" alt="rashm" height="35" width="35">
                             <span class="text-dark-blue font-large ff-meduim px-1 my-auto">{{department.title}}</span>
                        </div>
                        
                        <p class="card-text text-grey font-small ff-regular">
                            {{department.text}}
                        </p>
                    </div>
                    </div>
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
                title: t('departments.translation.overlayImg.title'),
                text: t('departments.translation.overlayImg.text'),
            },
            {
                icon: 'proofreading',
                title: t('departments.proofreading.overlayImg.title'),
                text: t('departments.proofreading.overlayImg.text'),
            },
            {
                icon: 'creativeEditing',
                title: t('departments.creativeEditing.overlayImg.title'),
                text: t('departments.creativeEditing.overlayImg.text'),
            },
            {
                icon: 'literaryAgencyAuthors',
                title: t('departments.literaryAgencyAuthors.overlayImg.title'),
                text: t('departments.literaryAgencyAuthors.overlayImg.text'),
            },
            {
                icon: 'marketing',
                title: t('departments.marketing.overlayImg.title'),
                text: t('departments.marketing.overlayImg.text'),
            },
            {
                icon: 'contentWriting',
                title: t('departments.contentWriting.overlayImg.title'),
                text: t('departments.contentWriting.overlayImg.text'),
            },
            {
                icon: 'bookDelivery',
                title: t('departments.bookDelivery.overlayImg.title'),
                text: t('departments.bookDelivery.overlayImg.text'),
            },
            {
                icon: 'events',
                title: t('departments.organizingEventsandConferences.overlayImg.title'),
                text: t('departments.organizingEventsandConferences.overlayImg.text'),
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