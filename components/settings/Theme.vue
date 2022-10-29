<script setup lang="ts">
import { useI18n } from "vue-i18n"
import { useSettingsStore } from "~/store"

const { t } = useI18n()

let { theme } = $(useSettingsStore())

function toggle() {
  if (theme === 'dark') theme = 'cupcake'
  else theme = 'dark'
}

watchEffect(() => { document.querySelector('html')?.setAttribute('data-theme', theme) })
</script>

<template>
  <div class="form-control">
    <h2 class="card-title justify-center">{{ t('theme') }}</h2>
    <label class="label theme-switcher">
      <span class="label-text">{{ t('dark') }}</span>
      <input type="checkbox" class="toggle" :checked="theme === 'cupcake'" @click="toggle" />
      <span class="label-text">{{ t('cupcake') }}</span>
    </label>
  </div>
</template>

<style scoped lang="scss">
.theme-switcher { @apply cursor-pointer justify-center gap-4 }
</style>

<i18n locale="ru">
theme: Тема
dark: Тёмная
cupcake: Светлая
</i18n>
