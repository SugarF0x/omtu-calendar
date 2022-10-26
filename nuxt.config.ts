import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineNuxtConfig({
  ssr: false,
  css: [
    '~/assets/styles/global.scss',
    'v-calendar/dist/style.css'
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.real'
  },
  experimental: {
    reactivityTransform: true
  },
  vite: {
    plugins: [
      vueI18n({
        defaultSFCLang: 'yaml',
        compositionOnly: true,
        globalSFCScope: false,
        forceStringify: true
      })
    ]
  }
})
