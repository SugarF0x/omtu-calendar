<script setup lang="ts">
import { Calendar } from 'v-calendar'
import { useDataStore, useSettingsStore } from "~/store"
import { parse } from "date-fns"
import { DATE_FORMAT } from "~/const"

const { course, specialties, group } = $(useSettingsStore())
const { subjects, classes } = $(useDataStore())

interface CalendarAttributes {
  key: string
  dates: Date[]
  customData: {
    title: string
    color: string
  }
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
        color: subject.color
      }
    })

    return acc
  }, [])
})
</script>

<template>
  <div class="wrapper">
    <calendar
      class="custom-calendar max-w-full"
      :first-day-of-week="2"
      locale="ru"
      :masks="{ weekdays: 'WWW' }"
      :attributes="attributes"
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-scroll">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="item"
              :style="`background-color: ${attr.customData.color};`"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </calendar>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

:deep(.custom-calendar.vc-container) {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 0px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;

  border-radius: 0;
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

.item {
  min-width: 100%;
  width: fit-content;

  @apply text-xs leading-tight rounded-sm p-1 mt-0 mb-1
}
</style>
