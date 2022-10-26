<script setup lang="ts">
import { useDataStore, useSettingsStore } from "~/store"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { course, specialties: selectedSpecialties } = $(useSettingsStore())
const { specialties } = $(useDataStore())

const displayedSpecs = $computed(() => specialties[course ?? 0] ?? [])
</script>

<template>
  <div class="form-control">
    <h2 class="card-title justify-center mb-2">{{ t("title") }}</h2>
    <label v-for="{ id, title } in displayedSpecs" :key="id" class="label cursor-pointer item">
      <span class="label-text">{{ title }}</span>
      <input type="checkbox" class="checkbox checkbox-primary" :value="id" v-model="selectedSpecialties" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.label {
  & + & {
    @apply pt-0
  }
}
</style>

<i18n locale="ru">
title: Специализации
</i18n>
