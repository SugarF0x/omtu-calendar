<script setup lang="ts">
import { useRouter } from "#app"
import { useSettingsStore } from "~/store"
import { useI18n } from "vue-i18n"
import { definePageMeta } from "#imports"

definePageMeta({ middleware: ['ftue'] })

const { t, tm, rt } = useI18n()

const { isNewUser } = $(useSettingsStore())

const router = useRouter()
function proceedToCalendar() {
  router.replace('/calendar')
}
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

          <div class="selectors">
            <settings-course />
            <settings-group />
            <settings-specialty class="specs" />
            <settings-theme />
          </div>

          <button class="btn btn-primary" :disabled="isNewUser" @click="proceedToCalendar">{{ t('proceed') }}</button>
        </div>
      </div>
    </div>
  </ftue-loader>
</template>

<style scoped lang="scss">
.selectors > * + * {
  @apply mt-4
}

.selectors {
  @apply mb-4
}

.specs {
  max-width: max(80%, 400px);
  @apply mx-auto
}
</style>

<i18n locale="ru">
title: ОМТУ Календарь занятий
paragraph:
  - Похоже, вы здесь первый раз или давно не заходили
  - Пожалуйста, выберите курс, группу и специализацию
paragraphNote: Этот выбор можно поменять позднее
proceed: Продолжить
</i18n>
