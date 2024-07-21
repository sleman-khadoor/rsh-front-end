// plugins/ltr-rtl.js

import { defineNuxtPlugin } from '#app'
import { useI18n } from 'vue-i18n'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('dir', () => {
    const { locales , locale} = useI18n()
    const dir = locales.value.find((x) => x.code === locale.value)?.dir;
    return dir
  })
})