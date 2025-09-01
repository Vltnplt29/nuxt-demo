export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false
    }
  },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    // '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
});

