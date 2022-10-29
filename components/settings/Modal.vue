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
          <div class="selectors">
            <settings-course />
            <settings-group />
          </div>
          <settings-specialty />
        </label>
      </label>
    </teleport>
  </div>
</template>

<i18n locale="ru">
settings: Настройки
</i18n>
