// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss',
      'nuxt-icon'
  ],
  app: {
      head: {
          title: 'Henry Zheng | ヘンリー',
          link: [
              { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap'},
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap'},
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'}
          ]
      }
  }
})
