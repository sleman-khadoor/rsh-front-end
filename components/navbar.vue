<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid px-5">
            <a class="navbar-brand m-0" href="#">
                <img src="/svg/logo.svg" class="d-block w-100" alt="rashm" height="70" width="70">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
                <ul class="navbar-nav w-100 justify-content-evenly nav-underline">
                <li v-for="page in pages" :class="page.title === 'Departments' ? 'nav-item dropdown' : 'nav-item'">
                    <NuxtLink v-if="!page.dropdown" :to="localePath(page.link)" class="nav-link text-dark-blue ff-regular font-small lh-24px" aria-current="page">{{ t(`navbar.${page.title}`) }}</NuxtLink>
                    <div v-else class="nav-link dropdown-toggle text-dark-blue ff-regular font-small lh-24px" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                         {{t(`navbar.${page.title}`)}}
                    </div>
                    <ul class="dropdown-menu p-0 bg-snow border-0">
                        <div class="d-flex flex-column flex-md-row">
                            <div class="pl-2">
                                <li class="p-2 d-flex">
                                    <img src="/icon/translate-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/translation')"class="dropdown-item px-1 py-0 text-choco">Translation</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="/icon/history-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/creativeEditing')"class="dropdown-item px-1 py-0 text-choco">Creative editing</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="/icon/marketing-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/marketing')"class="dropdown-item px-1 py-0 text-choco">Marketing service</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="/icon/literary-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/literaryAgencyAuthors')"class="dropdown-item px-1 py-0 text-choco">Literary agency authors</NuxtLink>
                                </li>
                            </div>
                            <div class="hr bg-dark-snow opacity-1 dynamic-divider"></div>
                            <div class="pr-2">
                                <li class="p-2 d-flex">
                                    <img src="/icon/prof-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/proofreading')" class="dropdown-item px-1 py-0 text-choco">Proofreading</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="/icon/book-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/bookDelivery')" class="dropdown-item px-1 py-0 text-choco">Book delivery service</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="/icon/editing-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/contentWriting')" class="dropdown-item px-1 py-0 text-choco">Content writing</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="/icon/event-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/organizingEventsAndConferences')" class="dropdown-item px-1 py-0 text-choco">Organizing events and conferences</NuxtLink>
                                </li>                    
                            </div>
                        </div>
                    </ul>
                </li>
                <li>
                    <NuxtLink class="nav-link text-dark-blue ff-regular font-small lh-24px line-h"
                    v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                        {{ t('navbar.language') }}
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
<style >
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
</style>