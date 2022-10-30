import { useSettingsStore } from "~/store"

export default defineNuxtRouteMiddleware((to) => {
  const { isNewUser } = $(useSettingsStore())

  if (to.name === 'index' && !isNewUser) return navigateTo('/calendar/', { replace: true })
  if (to.name === 'calendar' && isNewUser) return navigateTo('/', { replace: true })
})
