<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid px-5">
            <a class="navbar-brand m-0" href="#">
                <img src="@/assets/svg/logo.svg" class="d-block w-100" alt="rashm" height="70" width="70">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-100" id="navbarNavDropdown">
                <ul class="navbar-nav w-100 justify-content-evenly nav-underline">
                <li class="nav-item">
                    <NuxtLink :to="localePath('/')" class="nav-link text-dark-blue ff-regular font-small lh-24px" aria-current="page">{{ $t('home') }}</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/about-us')" class="nav-link text-dark-blue ff-regular font-small lh-24px">About us</NuxtLink>
                </li>
                <li class="nav-item dropdown">
                    <div class="nav-link dropdown-toggle text-dark-blue ff-regular font-small lh-24px" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Departments
                    </div>
                    <ul class="dropdown-menu p-0 bg-snow border-0">
                        <div class="d-flex flex-column flex-md-row">
                            <div class="pl-2">
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/translate-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/translation')"class="dropdown-item px-1 py-0 text-choco">Translation</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/history-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/creativeEditing')"class="dropdown-item px-1 py-0 text-choco">Creative editing</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/marketing-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/marketing')"class="dropdown-item px-1 py-0 text-choco">Marketing service</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/literary-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/literaryAgencyAuthors')"class="dropdown-item px-1 py-0 text-choco">Literary agency authors</NuxtLink>
                                </li>
                            </div>
                            <div :hidden="!flag" class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                            <div :hidden="flag" class="hr bg-dark-snow opacity-1" style="width: 1px;"></div>
                            <div class="pr-2">
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/prof-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/proofreading')" class="dropdown-item px-1 py-0 text-choco">Proofreading</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/book-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/bookDelivery')" class="dropdown-item px-1 py-0 text-choco">Book delivery service</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/editing-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/contentWriting')" class="dropdown-item px-1 py-0 text-choco">Content writing</NuxtLink>
                                </li>
                                <div class="hr bg-dark-snow opacity-1" style="height: 1px;"></div>
                                <li class="p-2 d-flex">
                                    <img src="@/assets/icon/event-drop-icon.svg" class="d-block mb-auto mx-1" alt="..." width="20" height="20">
                                    <NuxtLink :to="localePath('/departments/organizingEventsAndConferences')" class="dropdown-item px-1 py-0 text-choco">Organizing events and conferences</NuxtLink>
                                </li>                    
                            </div>
                        </div>
                    </ul>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/blogs')" class="nav-link text-dark-blue ff-regular font-small lh-24px">Blog</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/Books')" class="nav-link text-dark-blue ff-regular font-small lh-24px">Books</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/partners')" class="nav-link text-dark-blue ff-regular font-small lh-24px">Our Partners</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/publish-with-us')" class="nav-link text-dark-blue ff-regular font-small lh-24px">Publish with us</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink :to="localePath('/contact-us')" class="nav-link text-dark-blue ff-regular font-small lh-24px">Contact us</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="nav-link text-dark-blue ff-regular font-small lh-24px line-h"
                    v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
                        {{ locale.name }}
                    </NuxtLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default defineComponent({
    setup() {
        const { locale, locales } = useI18n()
        const router = useRouter()
        let flag = ref(false)
        const switchLocalePath = useSwitchLocalePath()

        const availableLocales = computed(() => {
            return locales.value.filter(i => i.code !== locale.value)
        });
        const createChunks = () => {
            const width = window.innerWidth

            if (width >= 767) {
                flag.value = false
            } else {
                flag.value = true
            }
        };
        onMounted(() => {
            createChunks()
            window.addEventListener('resize', createChunks)
        });
        onUpdated(() => {
            createChunks()
            window.addEventListener('resize', createChunks)
        });

        watch(createChunks,flag);
        return {
            switchLocalePath,
            availableLocales,
            flag
        }
    }
})
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
</style>