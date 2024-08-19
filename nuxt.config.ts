// https://nuxt.com/docs/api/configuration/nuxt-config
import { fetchBooks } from './services/booksService';
import { fetchBlogs } from './services/blogsService';
import { fetchAuthors } from './services/authorsService';

export default defineNuxtConfig({
  runtimeConfig:{
    API_URL: "http://127.0.0.1:9000/api",
    public: {
      API_URL: "http://127.0.0.1:9000/api",
      RECAPTCHA_SITE_KEY: "6LdyXSgqAAAAAEFIPnkdzxUV9H6dvp3x13KPkST8",
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ar',
      },
      meta: [
        // Global meta tags
        { name: 'description', content: 'اكتشف عالماً من الأدب من خلال مجموعتنا الكبيرة من الكتب والمدونات المميزة. استكشف أعمال أشهر المؤلفين وابحث عن الكتاب المثالي الذي سيُلهم مغامرتك القرائية التالية. انضم إلى مجتمع النشر لدينا وشارك قصصك مع العالم.', key: 'ar' },
        { name: 'keywords', content: 'كتب، أدب، مؤلفين، مدونات، مقالات، نشر، قراءة، مجموعة كتب، مجتمع الأدب، اكتب معنا، نشر رسم', key: 'ar' },
        { name: 'description', content: 'Discover a world of literature with our vast collection of books and insightful blogs. Explore works by renowned authors and find the perfect book to inspire your next reading adventure. Join our publishing community and share your stories with the world.', key: 'en' },
        { name: 'keywords', content: 'books, literature, authors, blogs, publishing, reading, book collection, literature community, write with us, Rashm Publishing', key: 'en' },
      ]
    }
  },
  ssr: false,
  css: ['bootstrap/dist/css/bootstrap.css','bootstrap/dist/css/bootstrap.min.css','~/assets/main.scss'],
  devtools: { enabled: false },

  devServer: {
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost 
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  modules: ["@nuxtjs/i18n", "@nuxt/image", '@nuxtjs/sitemap'],
  sitemap: {
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
    routes: async () => {
      const { data: books } = await fetchBooks();
      const { data: blogs } = await fetchBlogs();
      const { data: authors } = await fetchAuthors();
      return [
        '/',
        '/about-us',
        '/contact-us',
        '/contact-us',
        '/partners',
        '/publish-with-us',
        '/books',
        '/blogs',
        '/departments/translation',
        '/departments/creativeEditing',
        '/departments/marketing',
        '/departments/literaryAgencyAuthors',
        '/departments/proofreading',
        '/departments/bookDelivery',
        '/departments/contentWriting',
        '/departments/organizingEventsAndConferences',
        books.map(book => `/books/${book.slug.en}`),
        books.map(book => `/books/${book.slug.ar}`),
        blogs.map(blog => `/blogs/${blog.slug}`),
        authors.map(author => `/authors/${author.slug}`)
      ]
    }
  } as unknown as any,

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
      fallbackLocale: 'en',
    },
    lazy: true,
    langDir: 'lang/',
  },
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' },
    {src: '~/plugins/recaptcha.js'},
    '~/plugins/i18n-plugin.ts',
    '~/plugins/ltr-rtl.js',
    '~/plugins/vue3-tel-input.js'
  ],

  compatibilityDate: "2024-07-14"
})