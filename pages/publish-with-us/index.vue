<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 rounded-4">
            <div class="mb-3 text-center">
                <DepartmentsOverlayImg 
                 :imgSrc="'publish'" 
                 :gallery="false"
                 :btn="false"
                 :btnColor="''"
                 :text="$t('publishWithUs.overlayImg.text')"
                 :title="$t('publishWithUs.overlayImg.title')"/>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large ff-meduim text-dark-blue mb-3 text-center">{{$t('publishWithUs.achieveDream')}}</div>
                <div class="font-large ff-meduim text-choco mb-5 text-center">{{$t('publishWithUs.withServices')}}</div>
                <div class="row">
                    <div v-for="(service, i) in services" :key="i" class="col-lg-6 col-md-6 py-4 px-lg-4 px-md-3 px-sm-2 card-100">
                            <div class="d-flex justify-content-start">
                                <span class="text-choco font-x-large ff-meduim mx-1">0{{i+1}}</span>&nbsp;
                                <span class="text-dark-blue font-large ff-meduim mb-2">{{service.title}}</span>
                            </div>
                            <div class="font-meduim ff-regular lh-25 text-justify">
                                {{service.subTitle}}
                            </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large ff-meduim text-dark-blue mb-3 text-center">
                   {{$t('publishWithUs.whyPublishWithRashm')}}
                </div>
                <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 mb-3">
                    <DepartmentsCard :departments="whyRashm" :class="'col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4'"/>
                </div>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center">
                    {{$t('publishWithUs.requirementTitle')}}
                </div>
                <div class="row">
                    <div v-for="i in 6" :key="i" class="col-lg-6 col-md-6 py-4 px-lg-4 px-md-3 px-sm-2">
                            <div class="d-flex justify-content-start">
                                <span class="text-choco font-x-large ff-meduim mx-1">0{{i}}</span>&nbsp;
                                <span class="text-dark-blue font-large ff-meduim mb-2">{{$t(`publishWithUs.requirements.reqirement${i}.title`)}}</span>
                            </div>
                            <div class="font-meduim ff-regular lh-25 text-justify">
                                {{$t(`publishWithUs.requirements.reqirement${i}.text`)}}
                            </div>
                    </div>
                </div>
                
            </div>
             <div class="mb-3 bg-white justify-content-center rounded-3 p-5">
                <div class="row justify-content-center text-center">
                    <span class="font-x-large ff-meduim mb-2">{{$t('publishWithUs.contact.AreYouReady')}}</span>
                    <span class="font-meduim ff-meduim lh-25 mb-2">{{$t('publishWithUs.contact.forMoreInfo')}}</span>
                    <span class="font-meduim ff-regular lh-25 mb-2">{{$t('publishWithUs.contact.contactMsg')}}</span>
                    <div class="d-flex align-items-center w-auto mx-auto text-choco font-meduim ff-regular mb-2">
                        <img src="/icon/email-fill.svg" class="d-block my-auto mx-1" alt="..." width="20" height="20">
                        publishing@rashm.com.sa
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
    const { t, locale } = useI18n();
    const relativeCol = ref(null);
    const colHeight = ref('auto');
    const relativeService = ref(null);
    const serviceHeight = ref('auto');
    const whyRashm = ref([
        {
            title: t('publishWithUs.whyRashm.cause1.title'),
            subTitle: t('publishWithUs.whyRashm.cause1.subTitle'),
            iconSrc: 'star'
        },
        {
            title: t('publishWithUs.whyRashm.cause2.title'),
            subTitle: t('publishWithUs.whyRashm.cause2.subTitle'),
            iconSrc: 'medal-star'
        },
        {
            title: t('publishWithUs.whyRashm.cause3.title'),
            subTitle: t('publishWithUs.whyRashm.cause3.subTitle'),
            iconSrc: 'book'
        },
        {
            title: t('publishWithUs.whyRashm.cause4.title'),
            subTitle: t('publishWithUs.whyRashm.cause4.subTitle'),
            iconSrc: 'user-edit'
        }
    ])
    const services = ref([
        {
            title: t('publishWithUs.services.service1.title'),
            subTitle: t('publishWithUs.services.service1.subTitle')
        },
        {
            title: t('publishWithUs.services.service2.title'),
            subTitle: t('publishWithUs.services.service2.subTitle')
        },
        {
            title: t('publishWithUs.services.service3.title'),
            subTitle: t('publishWithUs.services.service3.subTitle')
        },
        {
            title: t('publishWithUs.services.service4.title'),
            subTitle: t('publishWithUs.services.service4.subTitle')
        },
        {
            title: t('publishWithUs.services.service5.title'),
            subTitle: t('publishWithUs.services.service5.subTitle')
        },
        {
            title: t('publishWithUs.services.service6.title'),
            subTitle: t('publishWithUs.services.service6.subTitle')
        },
        {
            title: t('publishWithUs.services.service7.title'),
            subTitle: t('publishWithUs.services.service7.subTitle')
        },
    ])
    
    // Define meta tags content based on the current locale
    const pageTitle = computed(() => {
        return locale.value === 'ar'
            ? 'انشر مع رشم'
            : 'Publish with Rashm';
    });

    const pageDescription = computed(() => {
        return locale.value === 'ar'
            ? 'تعرف على كيفية النشر مع رشم والخدمات المتاحة لتحقيق أحلامك. استكشف الأسباب والاحتياجات وكيفية التواصل معنا.'
            : 'Learn how to publish with Rashm and the services available to achieve your dreams. Explore reasons, requirements, and how to contact us.';
    });

    const pageKeywords = computed(() => {
        return locale.value === 'ar'
            ? 'نشر مع رشم, خدمات النشر, متطلبات النشر'
            : 'Publish with Rashm, Publishing Services, Publishing Requirements';
    });

    // Use useHead to update meta tags dynamically
    useHead({
        title: pageTitle.value,
        meta: [
            { name: 'description', content: pageDescription.value },
            { name: 'keywords', content: pageKeywords.value }
        ],
        link: [
            { rel: 'canonical', href: 'https://rashm.com.sa/publish-with-us' }
        ]
    });
    
    function setMaxCardHeight() {
        if(relativeCol.value && relativeService.value) {
            relativeCol.value.forEach(card => {
                card.style.minHeight = `unset`;
            });
            relativeService.value.forEach(card => {
                card.style.minHeight = `unset`;
            });
            const col_heights = relativeCol.value.map(card => card.offsetHeight);
            const services_heights = relativeService.value.map(card => card.offsetHeight);
            colHeight.value = Math.max(...col_heights);
            serviceHeight.value = Math.max(...services_heights);
            relativeCol.value.forEach(card => {
                card.style.minHeight = `${colHeight.value}px`;
            });
            relativeService.value.forEach(card => {
                card.style.minHeight = `${serviceHeight.value}px`;
            });
        }
        };
        onMounted(async() => {
            
            if (process.client) {

                // Initial start
                await setMaxCardHeight();
                
                window.addEventListener('resize', setMaxCardHeight)
                setInterval(setMaxCardHeight, 1000);
            }            
            
        });
    return {
        whyRashm,
        services,
        relativeCol,
        relativeService
    }
    }
})
</script>
<style scoped>
.card-100{
    height: 100%;
}
</style>