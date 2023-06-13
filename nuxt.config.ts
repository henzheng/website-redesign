// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
      '@nuxtjs/tailwindcss',
  ],
  app: {
      head: {
          title: 'Henry Zheng',
          link: [
              { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap' }
          ]
      }
  }
})
