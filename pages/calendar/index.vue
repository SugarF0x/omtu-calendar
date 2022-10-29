<!--suppress HtmlUnknownTag -->

<script setup lang="ts">
import { Calendar } from 'v-calendar'
import { useDataStore, useSettingsStore } from "~/store"
import { format, parse } from "date-fns"
import { DATE_FORMAT } from "~/const"
import { useI18n } from "vue-i18n"

const { t } = useI18n()

const { course, specialties, group, theme, isNewUser } = $(useSettingsStore())
const { subjects, classes } = $(useDataStore())

const router = useRouter()
onBeforeMount(() => { if (isNewUser) router.replace('/') })

const route = useRoute()
let dayKey = $ref((route.query.dayKey as string) ?? '')

function setClassIdQuery(key?: string) {
  if (key) {
    router.replace({ query: { dayKey: key }})
    dayKey = key
  } else {
    router.replace({})
    dayKey = ''
  }
}

interface CalendarCustomData {
  title: string
  color: string
  room: string
  professor: string
  time: string
  note?: string
}

interface CalendarAttributes {
  key: string
  dates: Date[]
  customData: CalendarCustomData
}

const attributes = $computed<CalendarAttributes[]>(() => {
  if (course === null) return []
  if (group === null) return []
  if (!subjects[course]) return []
  if (!classes[course]) return []

  return classes[course].reduce<CalendarAttributes[]>((acc, val) => {
    const subject = subjects[course].find(subject => subject.id === val.subjectId)
    if (!subject) {
      console.error(`Неверно указан id предмета: ${val.subjectId}, это занятие будет пропущено`)
      return acc
    }

    if (subject.specs && !subject.specs.some(spec => specialties.includes(spec))) return acc
    if (val.groups && !val.groups.includes(group)) return acc

    acc.push({
      key: val.id,
      dates: val.dates.map(date => parse(date, DATE_FORMAT, new Date())),
      customData: {
        title: subject.title,
        color: subject.color,
        professor: subject.professor,
        room: val.room,
        time: val.time,
        note: val.note
      }
    })

    return acc
  }, [])
})

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

function formatDateFromAttrs({ targetDate: { start } }: { targetDate: { start: Date } }): string {
  return format(start, DATE_FORMAT)
}
</script>

<template>
  <div class="wrapper">
    <settings-modal class="settings" />

    <calendar
      class="custom-calendar max-w-full"
      :first-day-of-week="2"
      locale="ru"
      :masks="{ weekdays: 'WWW' }"
      :attributes="attributes"
      :is-dark="theme === 'dark'"
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-scroll">
            <label
              v-for="attr in attributes"
              :for="formatDateFromAttrs(attr)"
              :key="formatDateFromAttrs(attr)"
              class="item modal-button"
              :style="`background-color: ${attr.customData.color};`"
              @click="setClassIdQuery(formatDateFromAttrs(attr))"
            >
              {{ attr.customData.title }}
            </label>
          </div>
        </div>
      </template>
    </calendar>

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
          <p class=""><b>Преподаватель:</b> {{ attr.professor }}</p>
          <p class=""><b>Кабинет:</b> {{ attr.room }}</p>
          <p class=""><b>Время:</b> {{ attr.time }}</p>
          <p v-if="attr.note" class=""><b>Примечание:</b> {{ attr.note }}</p>
        </label>
      </label>
    </teleport>
  </div>
</template>

<style scoped lang="scss">
.wrapper { @apply min-h-screen flex flex-col justify-center items-center }

.settings { @apply mb-4 ml-auto mr-4 }

.modal { @apply cursor-pointer flex-col gap-4 }
.modal-box { @apply relative }

.item {
  min-width: 100%;
  width: fit-content;

  @apply text-xs leading-tight rounded-sm p-1 m-1 block
}

:deep(.is-not-in-month) { filter: contrast(90%) }

:deep(.custom-calendar.vc-container) {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 0px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;

  border-radius: 0;
  min-width: min(1000px, 100%);
  max-width: max(1000px, 50%);
  width: 100%;

  & .vc-title {
    text-transform: capitalize;
  }

  & .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  & .vc-weeks {
    padding: 0;
  }
  & .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  & .vc-day {
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
    &.weekday-1,
    &.weekday-7 {
      background-color: #eff8ff;
    }
    &:not(.on-bottom) {
      border-bottom: var(--day-border);
      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }
    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }
  & .vc-day-dots {
    margin-bottom: 5px;
  }
}
</style>
