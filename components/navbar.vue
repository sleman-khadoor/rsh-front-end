<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-primary py-0">
            <div class="container-fluid px-5 align-items-stretch">
            <a class="navbar-brand m-0" href="#">
                <img src="/svg/logo.svg" class="d-block w-100" alt="rashm" height="70" width="70">
            </a>
            <button class="navbar-toggler h-40 my-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
                <ul class="navbar-nav w-100 justify-content-evenly nav-underline h-100">
                <li class="nav-item">
                    <NuxtLink :to="localePath('/')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.home`) }}</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/about-us')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.aboutUs`) }}</span></NuxtLink>
                </li>
                <li class="nav-item h-100 dropdown align-content-center">
                    <div class="dropdown-toggle text-choco ff-regular font-small lh-24px" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="text-decoration: none !important;">
                            <span class="text-dark-blue">{{t(`navbar.departments`)}}</span>&nbsp;
                        </div>
                        <ul class="dropdown-menu p-0 bg-snow border-0 w-fc">
                            <div class="d-flex flex-column flex-md-row w-fc">
                                <div class="pl-2">
                                    <li class="p-2 d-flex">
                                        <img src="/icon/translate-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.translation.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/translation')"class="dropdown-item px-1 py-0 text-choco">{{t(`departments.translation.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                    <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                    <li class="p-2 d-flex">
                                        <img src="/icon/history-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.creativeEditing.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/creativeEditing')"class="dropdown-item px-1 py-0 text-choco">{{t(`departments.creativeEditing.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                    <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                    <li class="p-2 d-flex">
                                        <img src="/icon/marketing-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.marketing.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/marketing')"class="dropdown-item px-1 py-0 text-choco">{{t(`departments.marketing.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                    <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                    <li class="p-2 d-flex">
                                        <img src="/icon/literary-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.literaryAgencyAuthors.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/literaryAgencyAuthors')"class="dropdown-item px-1 py-0 text-choco">{{t(`departments.literaryAgencyAuthors.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                </div>
                                <div class="hr bg-dark-snow opacity-1 dynamic-divider"></div>
                                <div class="pr-2">
                                    <li class="p-2 d-flex">
                                        <img src="/icon/prof-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.proofreading.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/proofreading')" class="dropdown-item px-1 py-0 text-choco">{{t(`departments.proofreading.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                    <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                    <li class="p-2 d-flex">
                                        <img src="/icon/book-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.bookDelivery.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/bookDelivery')" class="dropdown-item px-1 py-0 text-choco">{{t(`departments.bookDelivery.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                    <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                    <li class="p-2 d-flex">
                                        <img src="/icon/editing-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.contentWriting.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/contentWriting')" class="dropdown-item px-1 py-0 text-choco">{{t(`departments.contentWriting.overlayImg.title`)}}</NuxtLink>
                                    </li>
                                    <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                    <li class="p-2 d-flex">
                                        <img src="/icon/event-drop-icon.svg" class="d-block mb-auto mx-1" :alt="t(`departments.organizingEventsandConferences.overlayImg.title`)" width="20" height="20">
                                        <NuxtLink :to="localePath('/departments/organizingEventsAndConferences')" class="dropdown-item px-1 py-0 text-choco">{{t(`departments.organizingEventsandConferences.overlayImg.title`)}}</NuxtLink>
                                    </li>                    
                                </div>
                            </div>
                        </ul>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/blogs')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.blogs`) }}</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/books')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.books`) }}</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/partners')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.ourPartners`) }}</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/publish-with-us')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.publishWithUs`) }}</span></NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/contact-us')" class="nav-link text-choco ff-regular h-100 align-content-center font-small lh-24px" aria-current="page"><span class="text-dark-blue">{{ t(`navbar.contactUs`) }}</span></NuxtLink>
                </li>
                <li class="justify-content-center">
                    <NuxtLink class="nav-link text-choco h-100 align-content-center ff-regular font-small lh-24px line-h d-flex flex-wrap align-items-center w-mc"
                    v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                        <!-- <div> -->
                            <img src="/icon/global.svg" class="d-block w-fc mx-1" alt="lang" height="20" width="20">
                            <span class="text-dark-blue w-fc">{{ t('navbar.language') }}</span>
                        <!-- </div> -->
                    </NuxtLink>
                </li>
                </ul>
                
            </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
// export default defineComponent({
//     setup() {
        const { locale, locales, t } = useI18n()
        const switchLocalePath = useSwitchLocalePath()
        const pages = ref([
        {
            link: '/',
            title: 'home',
            dropdown: false
        },
        {
            link: '/about-us',
            title: 'aboutUs',
            dropdown: false
        },
        {
            link: '/',
            title: 'departments',
            dropdown: true
        },
        {
            link: '/blogs',
            title: 'blogs',
            dropdown: false
        },
        {
            link: '/books',
            title: 'books',
            dropdown: false
        },
        {
            link: '/partners',
            title: 'ourPartners',
            dropdown: false
        },
        {
            link: '/publish-with-us',
            title: 'publishWithUs',
            dropdown: false
        },
        {
            link: '/contact-us',
            title: 'contactUs',
            dropdown: false
        },
        ]);

        const availableLocales = computed(() => {
            return locales.value.filter(i => i.code !== locale.value)
        });

//         return {
//             switchLocalePath,
//             availableLocales,
//             pages
//         }
//     }
// })
</script>
<style>
.dropdown-menu {
    white-space: nowrap;
}
.a {
    white-space: pre-line !important;
    word-break: break-word !important;
}
.dropdown-item.active, .dropdown-item:active {
    background-color: unset !important;
}
.dropdown-item {
    text-align: start !important;
}
.dynamic-divider {
    width: 1px !important;
    height: unset;
}
@media only screen and (max-width: 767px) {
    .dynamic-divider {
        height: 1px !important;
        width: unset !important;
    }
}
[dir="rtl"] .navbar-expand-lg .navbar-nav .dropdown-menu{
    left: auto;
}
</style>