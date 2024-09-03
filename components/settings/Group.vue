<script setup lang="ts">
import { useConfigStore, useSettingsStore } from "~/store"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { group } = $(useSettingsStore())
const { config } = $(useConfigStore())
</script>

<template>
  <div class="flex flex-col">
    <h2 class="card-title justify-center">{{ t("title") }}</h2>
    <div class="btn-group justify-center mt-2">
      <input v-for="i in config?.langGroupsCount ?? 0" class="btn" type="radio" name="group" :data-title="i" :value="i - 1" v-model="group" />
    </div>
  </div>
</template>

<i18n locale="ru">
title: Группа
</i18n>
