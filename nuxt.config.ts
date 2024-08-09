// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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