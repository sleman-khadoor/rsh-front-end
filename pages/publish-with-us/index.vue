<template>
    <div class="row bg-secondary m-0">
        <div class="col-11 mx-auto my-5 text-center rounded-4">
            <div class="mb-3">
                <DepartmentsOverlayImg 
                 :imgSrc="'publish'" 
                 :text="$t('publishWithUs.overlayImg.text')"
                 :title="$t('publishWithUs.overlayImg.title')"/>
            </div>
            <div class="mb-3 bg-white rounded-3 py-5 px-lg-5 px-md-3 px-sm-2">
                <div class="font-x-large weight-meduim text-dark-blue mb-3">We are here to help you achieve your dream!</div>
                <div class="font-large weight-meduim text-choco mb-5">With our services, you will get</div>
                <div class="px-5 text-dark-blue">
                    <div v-for="(service, i) in services" :key="i" class="d-flex justify-content-start mb-3 lh-25 text-start">
                        <img src="@/assets/icon/circle-choco.svg" class="col-auto mt-1 mx-2" width="20" height="20"/>
                        <div>
                            <span class="font-meduim weight-semiBold">{{service.title}}: </span>
                            <span class="font-meduim weight-regular"> {{service.subTitle}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large weight-meduim text-dark-blue mb-3">
                    Why To Publish With Rashm?
                </div>
                <div class="row mx-auto bg-primary text-center justify-content-around rounded-4 mb-3">
                    <div v-for="(cause,i) in whyRashm" :key="i" class="col-lg-3 col-md-4 col-sm-6 text-dark-blue mb-4">
                        <DepartmentsCard :title="cause.title" :subTitle="cause.subTitle" :iconSrc="cause.iconSrc"/>
                    </div>
                </div>
            </div>
            <div class="mb-3 bg-white rounded-3 p-5">
                <div class="font-x-large weight-meduim text-dark-blue mb-5">
                    To publish with us You Should Meet These requirements
                </div>
                <div class="row">
                    <div v-for="i in 6" :key="i" class="col-lg-6 col-md-6 py-4 px-lg-4 px-md-3 px-sm-2 text-start">
                            <div class="d-flex justify-content-start">
                                <span class="text-choco font-x-large mx-1">0{{i}}</span>
                                <span class="text-dark-blue font-large mb-2">Requirement name</span>
                            </div>
                            <div class="font-meduim">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </div>
                    </div>
                </div>
                
            </div>
             <div class="mb-3 bg-white justify-content-center rounded-3 p-5">
                <div class="row justify-content-center">
                    <span class="font-x-large weight-meduim mb-2">Are you ready to turn your manuscript into a book?</span>
                    <span class="font-meduim weight-meduim lh-22 mb-2">Contact us today for a quote or more information</span>
                    <span class="font-meduim weight-regular lh-22 mb-2">Contact us at the following email</span>
                    <div class="d-flex align-items-center w-auto mx-auto text-choco font-meduim weight-regular mb-2">
                        <img src="@/assets/icon/email-fill.svg" class="d-block my-auto mx-1" alt="..." width="20" height="20">
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
    let whyRashm = [
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
    ]
    let services = [
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
    ]
    return {
        whyRashm,
        services
    }
    }
})
</script>