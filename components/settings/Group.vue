<script setup lang="ts">
import { useSettingsStore } from "~/store"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { group } = $(useSettingsStore())
</script>

<template>
  <div class="flex flex-col">
    <h2 class="card-title justify-center">{{ t("title") }}</h2>
    <div class="btn-group justify-center mt-2">
      <input class="btn" type="radio" name="group" data-title="1" :value="0" v-model="group" />
      <input class="btn" type="radio" name="group" data-title="2" :value="1" v-model="group" />
      <input class="btn" type="radio" name="group" data-title="3" :value="2" v-model="group" />
      <input class="btn" type="radio" name="group" data-title="4" :value="3" v-model="group" />
    </div>
  </div>
</template>

<i18n locale="ru">
title: Языковая
</i18n>
