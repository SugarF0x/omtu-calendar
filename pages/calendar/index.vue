<!--suppress HtmlUnknownTag -->

<script setup lang="ts">
import { Calendar } from 'v-calendar'
import { useDataStore, useSettingsStore } from "~/store"
import { format, parse, isLeapYear } from "date-fns"
import { DATE_FORMAT } from "~/const"
import { useI18n } from "vue-i18n"
import { CalendarAttributes } from "~/types"
import { definePageMeta } from "#imports"

definePageMeta({ middleware: ['ftue'] })

const { t } = useI18n()

const { course, specialties, group, theme } = $(useSettingsStore())
const { subjects, classes } = $(useDataStore())

const router = useRouter()
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

function formatDateFromAttrs({ targetDate: { start } }: { targetDate: { start: Date } }): string {
  return format(start, DATE_FORMAT)
}

const attributes = $computed<CalendarAttributes[]>(() => {
  if (course === null) return []
  if (group === null) return []
  if (!subjects[course]) return []
  if (!classes[course]) return []

  const events = classes[course].reduce<CalendarAttributes[]>((acc, val) => {
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

  if (isLeapYear(new Date())) events.push({
    key: 'chips-day',
    dates: [new Date(2024, 1, 29)],
    customData: {
      title: 'День чипсов',
      color: 'orange',
      professor: 'Профессор Дворкин',
      room: 'дома',
      time: 'весь день'
    }
  })

  events.push({
    key: 'christie-day',
    dates: [new Date(new Date().getFullYear(), 3, 1)],
    customData: {
      title: 'День крещатика',
      color: 'steelblue',
      professor: 'Профессор Лазло',
      room: 'храм пресвятого вальдо',
      time: 'весь день'
    }
  })

  return events
})
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

    <calendar-modal :attributes="attributes" :dayKey="dayKey" @update="setClassIdQuery" />
  </div>
</template>

<style lang="scss">
.custom-calendar {
  --header-color: hsl(var(--p));

  --weekday-bg: hsl(var(--pf));
  --weekday-border-color: hsl(var(--pf));

  --day-bg: hsl(var(--b1));
  --day-label-color: hsl(var(--bc));

  html[data-theme=cupcake] & {
    --day-border-color: #D6D1CE;
    --out-of-month-bg-color: #eaefef;
    --weekend-bg: #f0ede8;
  }

  html[data-theme=dark] & {
    --day-border-color: #343B4A;
    --out-of-month-bg-color: hsl(var(--b2));
    --weekend-bg: #262b38;
  }
}
</style>

<style scoped lang="scss">
.wrapper {
  min-width: min(1000px, 100%);
  max-width: max(1000px, 50%);

  @apply min-h-screen flex flex-col justify-center items-center mx-auto
}

.settings { @apply mb-4 ml-auto mr-4 }

.item {
  min-width: 100%;
  width: fit-content;

  @apply text-xs leading-tight rounded-sm p-1 m-1 block
}

:deep(.day-label) { color: var(--day-label) }

:deep(.vc-title) { color: white }
:deep(.vc-weekday) { color: white }
:deep(.vc-svg-icon) { color: white }

:deep(.day-label) {
  display: inline;
  width: fit-content;
  padding: .25rem;
  border-radius: 50%;
  aspect-ratio: 1;
  text-align: center;
}

:deep(.is-today) { .day-label { background-color: hsl(var(--s)); } }

:deep(.custom-calendar.vc-container) {
  --day-border: 1px solid var(--day-border-color);
  --day-width: 0px;
  --day-height: 90px;
  --weekday-border: 1px solid var(--weekday-border-color);

  border-radius: 0;
  width: 100%;

  & .vc-title {
    text-transform: capitalize;
  }

  & .vc-header {
    background-color: var(--header-color);
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
    background-color: var(--day-bg);

    &.is-not-in-month { background-color: var(--out-of-month-bg-color);}

    &.weekday-1,
    &.weekday-7 {
      &:not(.is-not-in-month) {
        background-color: var(--weekend-bg);
      }
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);
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
