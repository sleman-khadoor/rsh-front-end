<template>
    <div class="row bg-secondary m-0">
        <Title>About Rashm</Title>
        <Meta name="description" content="About Rashm" />
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-4">
                <DepartmentsOverlayImg 
                 :imgSrc="'about-us'" 
                 :text="$t('aboutUs.overlayImg.text')"
                 :title="$t('aboutUs.overlayImg.title')"/>
            </div>
            <div class="mb-4 bg-white rounded-3 py-5 px-lg-5 px-md-3 px-sm-2">
                <div class="font-x-large weight-meduim text-dark-blue mb-5 text-center px-4">Rashm aims to</div>
                <IndexHistory class="text-start" :data="aims" :bgColor="'bg-secondary'"/>
            </div>
            <div class="mb-4 bg-white rounded-3 py-5 px-lg-4 px-md-2 px-sm-1">
                <div class="font-x-large weight-meduim text-dark-blue mb-5 text-center px-4">Achievements Of Rashm Publishing House</div>
                <div v-for="(achievment, i) in achievements" class="row m-3 mt-0 mb-3 align-content-center align-content-stretch align-items-stretch font-meduim weight-regular">
                    <div class="col-lg-1 col-md-2 col-sm-2 col-auto justify-content-center text-center">
                        <img :src="`/_nuxt/assets/icon/circle-choco.svg`" alt="rashm" height="25" width="25">
                        <div v-if="i !== (achievements.length-1)" class="hr bg-light-choco h-100 mx-auto" style="width:2px;"></div>
                    </div>
                    <div class="col-lg-11 col-md-10 col-sm-10 col mb-4 font-meduim text-start">{{achievment.text}}</div>
                </div>
            </div>
             <div class="mb-4 bg-white rounded-3 py-5 px-lg-5 px-md-3 px-sm-2">
                <div class="font-x-large weight-meduim text-dark-blue mb-5 text-center px-4">Rasham Publishing House is distinguished by the following</div>
                <IndexHistory class="row m-0 text-start" :col="`col-lg-6 col-md-6 col-sm-12`" :data="publishingHouses" :bgColor="'bg-light-choco'"/>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useI18n } from 'vue-i18n';

export default defineComponent({
    setup() {
        const { t } = useI18n();
        let aims = [
            {
                text: t('aboutUs.aims.aim1')
            },
            {
                text: t('aboutUs.aims.aim2')
            },
            {
                text: t('aboutUs.aims.aim3')
            }
        ]
        let achievements = [
            {
                text: "The novel “The Exile of the Wanderer” by Omani novelist Zahran Al Qasimi won the International Prize for Arabic Fiction for the year 20"
            },
            {
                text: "The novel “Bread on Uncle Milad’s Table” won for the year 2022"
            },
            {
                text: "The novel “A Hole to the Sky” was included in the long list for the year 2021 AD by the writer, Mr. Abdullah Al Ayyaf."
            }
        ]
        let publishingHouses = [
            {
                text: t('aboutUs.publishingHouses.publishingHouse1')
            },
            {
                text: t('aboutUs.publishingHouses.publishingHouse2')
            },
            {
                text: t('aboutUs.publishingHouses.publishingHouse3')
            },
            {
                text: t('aboutUs.publishingHouses.publishingHouse4')
            },
            {
                text: t('aboutUs.publishingHouses.publishingHouse5')
            },
            {
                text: t('aboutUs.publishingHouses.publishingHouse6')
            }
        ]
        return{
            aims,
            publishingHouses,
            achievements
        }
    },
})
</script>