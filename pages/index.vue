<script setup lang="ts">
import { useRouter } from "#app"
import { useSettingsStore } from "~/store"
import { useI18n } from "vue-i18n"

const { t, tm, rt } = useI18n()

const { isNewUser } = $(useSettingsStore())

const router = useRouter()
onBeforeMount(() => { if (!isNewUser) router.replace('/calendar') })
</script>

<template>
  <ftue-loader>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-ld">
          <h1 class="text-5xl font-bold">{{ t('title') }}</h1>
          <div class="py-6">
            <p v-for="locale in tm('paragraph')" :key="locale">{{ rt(locale) }}</p>
            <p><strong>{{ t('paragraphNote') }}</strong></p>
          </div>

          <settings-course />
          <settings-group />
          <settings-specialty />
        </div>
      </div>
    </div>
  </ftue-loader>
</template>

<i18n locale="ru">
title: ОМТУ Календарь занятий
paragraph:
  - Похоже, вы здесь первый раз или давно не заходили
  - Пожалуйста, выберите курс, группу и специализацию
paragraphNote: Этот выбор можно поменять позднее
</i18n>
