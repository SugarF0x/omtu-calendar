<!--suppress HtmlUnknownTag -->

<script setup lang="ts">
import { CalendarAttributes, CalendarCustomData } from "~/types"
import { format } from "date-fns"
import { DATE_FORMAT } from "~/const"
import { useI18n } from "vue-i18n"

const props = defineProps<{
  attributes: CalendarAttributes[]
  dayKey: string
}>()

const { attributes, dayKey } = $(props)

const emit = defineEmits<{
  (e: 'update', id?: string): void
}>()

const { t } = useI18n()

const attributesByDay = $computed(() => {
  return attributes.reduce<Record<string, Array<CalendarCustomData & { key: string }>>>((acc, val) => {
    for (const date of val.dates) {
      const dateKey = formatDate(date)

      if (!(dateKey in acc)) acc[dateKey] = []
      acc[dateKey].push({ ...val.customData, key: val.key })
    }

    return acc
  }, {})
})

function formatDate(date: Date): string {
  return format(date, DATE_FORMAT)
}

function setClassIdQuery(id?: string) {
  emit('update', id)
}
</script>

<template>
  <teleport v-for="[day, classes] in Object.entries(attributesByDay)" :key="day" to="body">
    <input type="checkbox" :id="day" class="modal-toggle" />
    <label
      :for="day"
      class="modal cursor-pointer"
      :class="{ 'modal-open': dayKey === day }"
      @click="setClassIdQuery()"
    >
      <label
        v-for="attr in classes"
        :key="attr.key"
        class="modal-box"
        for=""
      >
        <label
          :for="day"
          class="btn btn-sm btn-circle absolute right-2 top-2"
          @click="setClassIdQuery()"
        >
          ✕
        </label>

        <h3 class="font-bold text-xl">{{ attr.title }}</h3>
        <div class="divider my-2" />
        <p v-if="attr.professor"><b>{{ t('professor') }}:</b> {{ attr.professor }}</p>
        <p><b>{{ t('room') }}:</b> {{ attr.room }}</p>
        <p><b>{{ t('time') }}:</b> {{ attr.time }}</p>
        <p v-if="attr.note" class=""><b>{{ t('note') }}:</b> {{ attr.note }}</p>
      </label>
    </label>
  </teleport>
</template>

<style scoped lang="scss">
.modal { @apply cursor-pointer flex-col gap-4 }
.modal-box { @apply relative }
</style>

<i18n locale="ru">
professor: Преподаватель
room: Кабинет
time: Время
note: Примечание
</i18n>
