// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Forsh Fitness - Personlig træning og coaching',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
        { name: 'title', content: 'Forsh Fitness - Personlig træning og coaching' },
        { name: 'description', content: 'Få en dedikeret coach, der deler dit ønske om forandring. Personlige planer tilpasset dig og din træningslokation, fokuseret på vægttab, muskelbygning, energi, sundhed og mental styrke.' },
      ],
      link: [
        { rel: 'icon', href: '/img/favicon/FF-Favicon-150x150.jpg', sizes: '32x32' },
        { rel: 'icon', href: '/img/favicon/FF-Favicon-300x300.jpg', sizes: '192x192' },
        { rel: 'apple-touch-icon', href: '/img/favicon/FF-Favicon-300x300.jpg' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&display=swap' },
        { rel: 'msapplication-TileImage', content: '/img/favicon/FF-Favicon-300x300.jpg' },
        { name: 'description', content: 'Få en dedikeret coach, der deler dit ønske om forandring. Personlige planer tilpasset dig og din træningslokation, fokuseret på vægttab, muskelbygning, energi, sundhed og mental styrke.' },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/i18n"],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: 'da',
    locales: [
      { code: 'da', iso: 'da-DK', file: 'da.json', icon: 'circle-flags:dk' },
      { code: 'en', iso: 'en-US', file: 'en.json', icon: 'circle-flags:en' },
    ],
    langDir: 'lang',
    detectBrowserLanguage: false,
  },
  experimental: {
    scanPageMeta: true,
  }
})