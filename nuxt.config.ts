// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'netlify',
  },
  css: ['~/assets/css/main.css'],
  modules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/image',
      'nuxt-icon'
  ],
  image: {
    format: ['webp']
  },
  app: {
      head: {
          htmlAttrs: {
            lang: 'en'
          },
          title: 'Henry Zheng',
          link: [
              { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'},
          ]
      }
  }
})
