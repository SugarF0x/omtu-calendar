<script setup lang="ts">
import { useSettingsStore } from "~/store"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { course } = $(useSettingsStore())
</script>

<template>
  <div class="flex flex-col">
    <h2 class="card-title justify-center">{{ t("title") }}</h2>
    <div class="btn-group justify-center">
      <input class="btn" type="radio" name="course" data-title="1" :value="0" v-model="course" />
      <input class="btn" type="radio" name="course" data-title="2" :value="1" v-model="course" />
    </div>
  </div>
</template>

<i18n locale="ru">
title: Курс
</i18n>
