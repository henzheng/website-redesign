// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-icon'
  ],
  app: {
      head: {
          htmlAttrs: {
            lang: 'en'
          },
          title: 'Henry Zheng | 郑鹏',
          link: [
              { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'},
          ]
      }
  }
})
