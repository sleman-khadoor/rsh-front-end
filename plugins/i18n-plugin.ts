// plugins/i18n-plugin.ts
import { defineNuxtPlugin } from '#app'
import { useI18n } from 'vue-i18n'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.provide('getLocale', () => {
    const { locale } = useI18n()
    return locale.value
  })
})


declare module '#app' {
  interface NuxtApp {
    $getLocale: () => string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $getLocale: () => string
  }
}
