// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig:{
    API_URL: "http://127.0.0.1:9000/api",
    public: {
      API_URL: "http://127.0.0.1:9000/api"
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  ssr: true,
  css: ['bootstrap/dist/css/bootstrap.min.css','bootstrap/dist/css/bootstrap.css','~/assets/main.scss'],
  devtools: { enabled: true },

  // buildModules: ['@nuxt/typescript-build'],
  devServer: {
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost 
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  modules: ["@nuxtjs/i18n", "@nuxt/image"],

  i18n: {
    /* module options */
    locales: [
      {
        code: "ar",
        iso: "ar-SA",
        name: "Arabic",
        file: "ar.json",
        dir: 'rtl'
      },
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en.json",
        dir: 'ltr'
      },
    ],
    defaultLocale: 'ar',
    strategy: 'prefix_except_default', // or 'prefix', depending on your needs
    detectBrowserLanguage: {
      fallbackLocale: 'ar',
    },
    lazy: true,
    langDir: 'lang/',
  },
  plugins: [
    '~/plugins/i18n-plugin.ts',
    '~/plugins/ltr-rtl.js',
  ],

  compatibilityDate: "2024-07-14"
})