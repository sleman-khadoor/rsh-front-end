// plugins/router.js
import { defineNuxtPlugin } from '#app'
import { defineAsyncComponent } from 'vue'

export default defineNuxtPlugin(nuxtApp => {
  const router = nuxtApp.$router

  router.addRoute({
    path: '/',
    component: defineAsyncComponent(() => import('~/pages/index/index.vue'))
  })

  router.addRoute({
    path: '/about-us',
    component: defineAsyncComponent(() => import('~/pages/about-us/index.vue'))
  })

  router.addRoute({
    path: '/contact-us',
    component: defineAsyncComponent(() => import('~/pages/contact-us/index.vue'))
  })
})
