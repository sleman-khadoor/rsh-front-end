<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                    :imgSrc="'department8'" 
                    :btnColor="'bg-gold'"
                    :btn="true"
                    :gallery="false"
                    :text="$t('departments.organizingEventsandConferences.overlayImg.text')"
                    :title="$t('departments.organizingEventsandConferences.overlayImg.title')"/>
            </div>
            <div class="row m-0 mb-4 bg-white rounded-3 pb-3 px-md-3 px-sm-2">
                <div class="w-75 mx-auto rounded-rectang bg-dark-blue text-white justify-content-center text-center">
                    <p class="font-large">{{t('departments.organizingEventsandConferences.title')}}</p>
                </div>
                <div class="row mt-5 mx-0">
                    <div class="mb-5 col-lg-6 col-md-12 col-sm-12 m-0 px-lg-5 px-md-3 px-sm-4">
                        <div class="px-0 mb-4 font-x-large ff-meduim text-choco">{{t('departments.organizingEventsandConferences.eventTitle')}}</div>
                        <div v-for="(service, i) in organaizingEvents" :key="i" class="col-lg-12 mb-4 px-0 card-100">
                                <div class="d-flex justify-content-start">
                                    <span class="text-choco font-x-large ff-meduim mx-1">0{{i+1}}</span>&nbsp;
                                    <span class="text-dark-blue font-large ff-meduim mb-2">{{service.title}}</span>
                                </div>
                                <div class="font-meduim ff-regular lh-25 text-justify">
                                    {{service.text}}
                                </div>
                        </div>
                    </div>
                    <div class="mb-5 col-lg-6 col-md-12 col-sm-12 m-0 px-lg-5 px-md-3 px-sm-4">
                        <div class="px-0 mb-4 font-x-large ff-meduim text-choco">{{t('departments.organizingEventsandConferences.workshopTitle')}}</div>
                        <div v-for="(service, i) in organaizingWorkShop" :key="i" class="col-lg-12 mb-4 px-0 card-100">
                                <div class="d-flex justify-content-start">
                                    <span class="text-choco font-x-large ff-meduim mx-1">0{{i+1}}</span>&nbsp;
                                    <span class="text-dark-blue font-large ff-meduim mb-2">{{service.title}}</span>
                                </div>
                                <div class="font-meduim ff-regular lh-25 text-justify">
                                    {{service.text}}
                                </div>
                        </div>
                    </div>
                    <div class="mb-5 col-lg-6 col-md-12 col-sm-12 m-0 px-lg-5 px-md-3 px-sm-4">
                        <div class="px-0 mb-4 font-x-large ff-meduim text-choco">{{t('departments.organizingEventsandConferences.culturalTitle')}}</div>
                        <div v-for="(service, i) in cultur" :key="i" class="col-lg-12 mb-4 px-0 card-100">
                                <div class="d-flex justify-content-start">
                                    <span class="text-choco font-x-large ff-meduim mx-1">0{{i+1}}</span>&nbsp;
                                    <span class="text-dark-blue font-large ff-meduim mb-2">{{service.title}}</span>
                                </div>
                                <div class="font-meduim ff-regular lh-25 text-justify">
                                    {{service.text}}
                                </div>
                        </div>
                    </div>
                    <div class="mb-5 col-lg-6 col-md-12 col-sm-12 m-0 px-lg-5 px-md-3 px-sm-4">
                        <div class="px-0 mb-4 font-x-large ff-meduim text-choco">{{t('departments.organizingEventsandConferences.networkingTitle')}}</div>
                        <div v-for="(service, i) in networking" :key="i" class="col-lg-12 mb-4 px-0 card-100">
                                <div class="d-flex justify-content-start">
                                    <span class="text-choco font-x-large ff-meduim mx-1">0{{i+1}}</span>&nbsp;
                                    <span class="text-dark-blue font-large ff-meduim mb-2">{{service.title}}</span>
                                </div>
                                <div class="font-meduim ff-regular lh-25 text-justify">
                                    {{service.text}}
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                    :title="$t('departments.organizingEventsandConferences.form.title')" 
                    :subTitle="$t('departments.organizingEventsandConferences.form.subTitle')" 
                    :color="'bg-gold'" 
                    :circleSrc="'circle-gold'"
                    :steps="true"
                    :stepsData="stepsData"
                    :serviceName="'organizing_events_conferences_service'" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useHead } from '#app';

// Setup i18n
const { t, locale } = useI18n();

// Define dynamic metadata
useHead({
  title: t('departments.organizingEventsandConferences.overlayImg.title'), // Dynamic page title
  meta: [
    {
      name: 'description',
      content: t('departments.organizingEventsandConferences.overlayImg.text') // Dynamic meta description
    },
    {
      name: 'keywords',
      content: locale.value === 'ar'
        ? 'تنظيم الأحداث والمؤتمرات, فعاليات رشم, تنظيم فعاليات, مؤتمرات, تنظيم اجتماعات, تنظيم مؤتمرات الشركات, تنظيم فعاليات ثقافية, تنظيم فعاليات اجتماعية, تنظيم ورش عمل, تنظيم الفعاليات, خدمات تنظيم الفعاليات'
        : 'event organization, conferences, event planning, meetings organization, corporate conference planning, cultural events, social events, workshop organization, event management, event services'
    }
  ]
});

const organaizingEvents = [
    {
        title: t('departments.organizingEventsandConferences.eventbody.event1.title'),
        text: t('departments.organizingEventsandConferences.eventbody.event1.subTitle')
    },
    {
        title: t('departments.organizingEventsandConferences.eventbody.event2.title'),
        text: t('departments.organizingEventsandConferences.eventbody.event2.subTitle')
    },
    {
        title: t('departments.organizingEventsandConferences.eventbody.event3.title'),
        text: t('departments.organizingEventsandConferences.eventbody.event3.subTitle')
    }
];

const organaizingWorkShop = [
    {
        title: t('departments.organizingEventsandConferences.workshopbody.workshop1.title'),
        text: t('departments.organizingEventsandConferences.workshopbody.workshop1.subTitle')
    },
    {
        title: t('departments.organizingEventsandConferences.workshopbody.workshop2.title'),
        text: t('departments.organizingEventsandConferences.workshopbody.workshop2.subTitle')
    },
    {
        title: t('departments.organizingEventsandConferences.workshopbody.workshop3.title'),
        text: t('departments.organizingEventsandConferences.workshopbody.workshop3.subTitle')
    }
];

const cultur = [
    {
        title: t('departments.organizingEventsandConferences.culturalbody.cultural1.title'),
        text: t('departments.organizingEventsandConferences.culturalbody.cultural1.subTitle')
    },
    {
        title: t('departments.organizingEventsandConferences.culturalbody.cultural2.title'),
        text: t('departments.organizingEventsandConferences.culturalbody.cultural2.subTitle')
    }
];

const networking = [
    {
        title: t('departments.organizingEventsandConferences.networkingbody.networking1.title'),
        text: t('departments.organizingEventsandConferences.networkingbody.networking1.subTitle')
    },
    {
        title: t('departments.organizingEventsandConferences.networkingbody.networking2.title'),
        text: t('departments.organizingEventsandConferences.networkingbody.networking2.subTitle')
    }
];

const stepsData = [
    t('departments.organizingEventsandConferences.form.steps.step1'),
    t('departments.organizingEventsandConferences.form.steps.step2'),
    t('departments.organizingEventsandConferences.form.steps.step3'),
    t('departments.organizingEventsandConferences.form.steps.step4'),
];
</script>

<style scoped>
.rounded-rectang {
    height: 75px;
    align-content: center;
    border-radius: 0 0 250px 250px;
}
</style>
