// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.svg' }],
      title: 'Дзен-мани - Банки Беларуси',
      meta: [
        {
          name: 'description',
          content: '',
        },
        {
          name: 'keywords',
          content: 'zenmoney',
        },
        {
          name: 'author',
          content: 'krislintigo',
        },
      ],
    },
  },

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-15',
})
