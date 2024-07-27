<template>
    <div class="row bg-secondary m-0">
        <Title>About Rashm</Title>
        <Meta name="description" content="About Rashm" />
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-4">
                <DepartmentsOverlayImg 
                 :imgSrc="'about-us'" 
                 :gallery="false"
                 :btn="false"
                 :btnColor="''"
                 :text="$t('aboutUs.overlayImg.text')"
                 :title="$t('aboutUs.overlayImg.title')"/>
            </div>
            <div class="mb-4 bg-white rounded-3 py-5 px-lg-5 px-md-3 px-sm-2">
                <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center px-4">Rashm aims to</div>
                <IndexHistory class="text-start" :data="aims" :col="'col-12'" :bgColor="'bg-secondary'" :withTitle="false"/>
            </div>
            <div class="mb-4 bg-white rounded-3 py-5 px-lg-4 px-md-2 px-sm-1">
                <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center px-4">Achievements Of Rashm Publishing House</div>
                <div v-if="achievementsPending">Loading...</div>
                <div v-else-if="achievementsError">Error loading achievements: {{ achievementsError.message }}</div>
                <div v-else v-for="(achievment, i) in achievements" class="row m-3 mt-0 mb-3 align-content-center align-content-stretch align-items-stretch font-meduim ff-regular">
                    <div class="col-lg-1 col-md-2 col-sm-2 col-auto justify-content-center text-center">
                        <img :src="`/icon/circle-choco.svg`" alt="rashm" height="25" width="25">
                        <div v-if="i !== (achievements.length-1)" class="hr bg-light-choco h-100 mx-auto" style="width:2px;"></div>
                    </div>
                    <div class="col-lg-11 col-md-10 col-sm-10 col mb-4 text-dark-blue font-meduim ff-regular text-start">{{achievment.content}}</div>
                </div>
            </div>
             <div class="mb-4 bg-white rounded-3 py-5 px-lg-5 px-md-3 px-sm-2">
                <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center px-4">Rasham Publishing House is distinguished by the following</div>
                <IndexHistory class="row m-0 text-start" :col="`col-lg-6 col-md-6 col-sm-12`" :data="publishingHouses" :bgColor="'bg-light-choco'" :withTitle="false"/>
            </div>
        </div>
    </div>
</template>
<script setup>
import { defineComponent } from '@vue/composition-api'
import { useI18n } from 'vue-i18n';

definePageMeta({
  lazy: true
})
const { t } = useI18n();
const runTimeConfig = useRuntimeConfig();
const aims = ref([
            {
                text: t('aboutUs.aims.aim1')
            },
            {
                text: t('aboutUs.aims.aim2')
            },
            {
                text: t('aboutUs.aims.aim3')
            }
])
const publishingHouses = ref([
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
    ])
const achievements = ref([]);
const achievementsPending = ref(false);
const achievementsError = ref(null);
// Fetch achievements
const fetchAchievements = async () => {
    achievementsPending.value = true;
    achievementsError.value = null;

    try {
        const response = await $fetch(`${runTimeConfig.public.API_URL}/achievements`, {
            headers: API_HEADER(),
        });

        achievements.value = response.data;
    } catch (error) {
        achievementsError.value = error;
        console.error('Error fetching achievements:', error);
    } finally {
        achievementsPending.value = false;
    }
};

// Fetch data on component mount
onMounted(fetchAchievements);
</script>