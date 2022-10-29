<!--suppress HtmlUnknownTag -->

<script setup lang="ts">
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<template>
  <div>
    <label for="settings-modal" class="btn btn-secondary">{{ t('settings') }}</label>
    <teleport to="body">
      <input type="checkbox" id="settings-modal" class="modal-toggle" />
      <label for="settings-modal" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <label for="settings-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 class="text-xl font-bold">{{ t('settings') }}</h3>
          <div class="divider my-2" />
          <div class="items-wrapper">
            <div class="selectors">
              <settings-course />
              <settings-group />
            </div>
            <settings-specialty />
            <settings-theme />
          </div>
        </label>
      </label>
    </teleport>
  </div>
</template>

<style scoped lang="scss">
.items-wrapper { @apply flex flex-col gap-4 }
.selectors { @apply flex justify-around }
</style>

<i18n locale="ru">
settings: Настройки
</i18n>
