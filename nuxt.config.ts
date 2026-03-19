// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
      title: 'Дзен-мани - Банки Беларуси',
      meta: [
        {
          name: 'description',
          content:
            'Каталог банков Беларуси Zenmoney (Дзен-мани) со статусами синхронизации и особенностями подключения.',
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

  compatibilityDate: '2026-03-20',
})
