// utils/i18n-utils.ts
import { getNuxtAppInstance } from './nuxt-app'

export function getCurrentLocale(): string {
  const nuxtApp = getNuxtAppInstance()
  if (nuxtApp.$getLocale) {
    return nuxtApp.$getLocale()
  } else {
    throw new Error('getLocale function is not available')
  }
}
