<script setup lang="ts">
import { useConfigStore, useDataStore } from "~/store"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { isLoading: isConfigLoading } = $(useConfigStore())
const { isLoading: isDataLoading } = $(useDataStore())

const isLoading = $computed(() => isConfigLoading || isDataLoading)
</script>

<template>
  <div>
    <main v-if="isLoading" class="loaderWrapper">
      <h1>{{ t('title') }}</h1>
      <progress class="progress w-56" />
    </main>

    <slot v-else />
  </div>
</template>

<style scoped lang="scss">
.loaderWrapper {
  @apply
  h-screen
  flex
  flex-col
  justify-center
  items-center
}
</style>

<i18n locale="ru">
title: Загружаем конфигурацию...
</i18n>
