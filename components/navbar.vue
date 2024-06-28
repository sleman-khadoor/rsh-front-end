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
                    <NuxtLink to="/" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px" aria-current="page">{{ $t('home') }}</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/about-us" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px">About us</NuxtLink>
                </li>
                <li class="nav-item dropdown">
                    <div class="nav-link dropdown-toggle text-dark-blue weight-meduim font-meduim lh-24px" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Departments
                    </div>
                    <ul class="dropdown-menu">
                    <li><NuxtLink to="/departments/translation"class="dropdown-item">Translation</NuxtLink></li>
                    <li><NuxtLink to="/departments/creativeEditing"class="dropdown-item">Creative editing</NuxtLink></li>
                    <li><NuxtLink to="/departments/marketing"class="dropdown-item">Marketing service</NuxtLink></li>
                    <li><NuxtLink to="/departments/literaryAgencyAuthors"class="dropdown-item">Literary agency authors</NuxtLink></li>
                    <li><NuxtLink to="/departments/proofreading"class="dropdown-item">Proofreading</NuxtLink></li>
                    <li><NuxtLink to="/departments/bookDelivery"class="dropdown-item">Book delivery service</NuxtLink></li>
                    <li><NuxtLink to="/departments/contentWriting"class="dropdown-item">Content writing</NuxtLink></li>
                    <li><NuxtLink to="/departments/organizingEventsAndConferences"class="dropdown-item">Organizing events and conferences</NuxtLink></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/blog" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px">Blog</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/Books" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px">Books</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/partners" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px">Our Partners</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/publish-with-us" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px">Publish with us</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink to="/contact-us" class="nav-link text-dark-blue weight-meduim font-meduim lh-24px">Contact us</NuxtLink>
                </li>
                <li>
                    <NuxtLink class="nav-link text-dark-blue weight-meduim font-meduim lh-24px line-h"
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
<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

</script>