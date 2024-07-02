// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  css: ['bootstrap/dist/css/bootstrap.min.css','~/assets/main.scss'],
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
    lazy: true,
    langDir: "lang",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en-US.json",
      },
      {
        code: "ar",
        iso: "ar",
        name: "Arabic",
        file: "ar.json",
      },
    ],
    defaultLocale: "en-US",
    detectBrowserLanguage: {
      fallbackLocale: "ar",
    }
  }
})