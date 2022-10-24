import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({ locale: 'ru' })

  vueApp.use(i18n)
})
