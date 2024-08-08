// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@primevue/nuxt-module',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
  ],
  eslint: {
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
  css: ['primevue/resources/themes/aura-light-pink/theme.css', 'primeicons/primeicons.css', 'primeflex/primeflex.css'],
  primevue: {
    options: {
      ripple: true,
      theme: {
        preset: Aura,
      },
    },
    autoImport: true,
  },
  app: {
    head: {
      title: 'OnlyMaya - Food 🍕',
    },
  },
});
