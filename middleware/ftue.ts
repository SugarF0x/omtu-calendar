import { useSettingsStore } from "~/store"

export default defineNuxtRouteMiddleware((to) => {
  const { isNewUser } = $(useSettingsStore())

  if (to.path === '/' && !isNewUser) return navigateTo('/calendar', { replace: true })
  if (to.path === '/calendar' && isNewUser) return navigateTo('/', { replace: true })
})
