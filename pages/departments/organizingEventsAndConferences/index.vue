<template>
     <div class="row bg-secondary m-0">
        <Title>Organizing Events And Conferences with Rashm</Title>
        <Meta name="description" content="Organizing Events And Conferences with Rashm" />
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
            <div class="mb-4 bg-white rounded-3 pb-5 px-lg-5 px-md-3 px-sm-2">
                <div class="w-75 mx-auto rounded-rectang bg-dark-blue text-white justify-content-center text-center">
                    <p class="font-large">{{t('departments.organizingEventsandConferences.title')}}</p>
                </div>
                <div class="font-x-large ff-meduim text-choco mb-3 mt-4 text-center px-4">{{t('departments.organizingEventsandConferences.eventTitle')}}</div>
                <IndexHistory class="row m-0 text-start" :col="`col-lg-12 col-md-12 col-sm-12`" :data="organaizingEvents" :bgColor="'bg-light-choco'" :withTitle="true"/>
                <div class="font-x-large ff-meduim text-choco mb-3 mt-4 text-center px-4">{{t('departments.organizingEventsandConferences.workshopTitle')}}</div>
                <IndexHistory class="row m-0 text-start" :col="`col-lg-12 col-md-12 col-sm-12`" :data="organaizingWorkShop" :bgColor="'bg-light-choco'" :withTitle="true"/>
                <div class="font-x-large ff-meduim text-choco mb-3 mt-4 text-center px-4">{{t('departments.organizingEventsandConferences.networkingTitle')}}</div>
                <IndexHistory class="row m-0 text-start" :col="`col-lg-12 col-md-12 col-sm-12`" :data="networking" :bgColor="'bg-light-choco'" :withTitle="true"/>
                <div class="font-x-large ff-meduim text-choco mb-3 mt-4 text-center px-4">{{t('departments.organizingEventsandConferences.culturalTitle')}}</div>
                <IndexHistory class="row m-0 text-start" :col="`col-lg-12 col-md-12 col-sm-12`" :data="cultur" :bgColor="'bg-light-choco'" :withTitle="true"/>
            </div>
            <div id="contacts" class="mx-auto bg-primary rounded-4 py-2">
                <ContactUsForm 
                :title="$t('departments.organizingEventsandConferences.form.title')" 
                :subTitle="$t('departments.organizingEventsandConferences.form.subTitle')" 
                :color="'bg-gold'" 
                :circleSrc="'circle-gold'"
                :steps="true"
                :serviceName="'organizing_events_conferences_service'" />
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
            title: t('departments.organizingEventsandConferences.departments.department1'),
            iconSrc: 'phone'
        },
        {
            title: t('departments.organizingEventsandConferences.departments.department2'),
            iconSrc: 'phone'
        },
        {
            title: t('departments.organizingEventsandConferences.departments.department3'),
            iconSrc: 'phone'
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
    let organaizingEvents = [
            {
                title: t('aboutUs.publishingHouses.publishingHouse1'),
                text: t('aboutUs.publishingHouses.publishingHouse1')
            },
            {
                title: t('aboutUs.publishingHouses.publishingHouse2'),
                text: t('aboutUs.publishingHouses.publishingHouse2')
            },
            {
                title: t('aboutUs.publishingHouses.publishingHouse3'),
                text: t('aboutUs.publishingHouses.publishingHouse3')
            }
    ]
    let organaizingWorkShop = [
            {
                title: t('aboutUs.publishingHouses.publishingHouse1'),
                text: t('aboutUs.publishingHouses.publishingHouse1')
            },
            {
                title: t('aboutUs.publishingHouses.publishingHouse2'),
                text: t('aboutUs.publishingHouses.publishingHouse2')
            },
            {
                title: t('aboutUs.publishingHouses.publishingHouse3'),
                text: t('aboutUs.publishingHouses.publishingHouse3')
            }
    ]
    let cultur = [
            {
                title: t('aboutUs.publishingHouses.publishingHouse1'),
                text: t('aboutUs.publishingHouses.publishingHouse1')
            },
            {
                title: t('aboutUs.publishingHouses.publishingHouse2'),
                text: t('aboutUs.publishingHouses.publishingHouse2')
            }
    ]
    let networking = [
            {
                title: t('aboutUs.publishingHouses.publishingHouse1'),
                text: t('aboutUs.publishingHouses.publishingHouse1')
            },
            {
                title: t('aboutUs.publishingHouses.publishingHouse2'),
                text: t('aboutUs.publishingHouses.publishingHouse2')
            }
    ]
    return {
         t,
         departments,
         contents,
         organaizingEvents,
         organaizingWorkShop,
         networking,
         cultur
    }
    },
});
</script>
<style scoped>
.rounded-rectang{
    height: 75px;
    align-content: center;
    border-radius: 0 0 250px 250px;
}
</style>
