export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    prerender: {
      failOnError: false
    }
  },
  modules: [
    '@nuxt/ui',
    // '@nuxtjs/tailwindcss' // Optionnel, si vous souhaitez la gestion automatique
  ],
  css: ['~/assets/css/main.css'],
});

