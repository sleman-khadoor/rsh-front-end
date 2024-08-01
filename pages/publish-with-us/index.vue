<template>
    <div class="row bg-secondary m-0">
        <Title>Publish with Rashm</Title>
        <Meta name="description" content="Publish with Rashm" />
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
            <div class="mb-3 bg-white rounded-3 py-5 px-lg-5 px-md-3 px-sm-2">
                <div class="font-x-large ff-meduim text-dark-blue mb-3 text-center">{{$t('publishWithUs.achieveDream')}}</div>
                <div class="font-large ff-meduim text-choco mb-5 text-center">{{$t('publishWithUs.withServices')}}</div>
                <div class="px-5 text-dark-blue">
                    <div v-for="(service, i) in services" :key="i" class="d-flex justify-content-start mb-3 lh-25">
                        <img src="/icon/circle-choco.svg" class="col-auto mt-1 mx-2" width="20" :alt="service.title" height="20"/>
                        <div class="mb-2 lh-25">
                            <span class="font-meduim ff-semiBold">{{service.title}}: </span>
                            <span class="font-meduim ff-regular"> {{service.subTitle}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large ff-meduim text-dark-blue mb-3 text-center">
                   {{$t('publishWithUs.whyPublishWithRashm')}}
                </div>
                <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 mb-3">
                    <div v-for="(cause,i) in whyRashm" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                        <DepartmentsCard :title="cause.title" :subTitle="cause.subTitle" :iconSrc="cause.iconSrc"/>
                    </div>
                </div>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large ff-meduim text-dark-blue mb-5 text-center">
                    {{$t('publishWithUs.requirementTitle')}}
                </div>
                <div class="row">
                    <div v-for="i in 6" :key="i" class="col-lg-6 col-md-6 py-4 px-lg-4 px-md-3 px-sm-2">
                            <div class="d-flex justify-content-start">
                                <span class="text-choco font-x-large mx-1">0{{i}}</span>&nbsp;
                                <span class="text-dark-blue font-large mb-2">{{$t('publishWithUs.requirements.reqirement1.title')}}</span>
                            </div>
                            <div class="font-meduim lh-25">
                                {{$t('publishWithUs.requirements.reqirement1.text')}}
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
                        rasham@gmail.com
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
    return {
        whyRashm,
        services
    }
    }
})
</script>