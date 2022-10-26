<script setup lang="ts">
import { Calendar } from 'v-calendar'
import { useDataStore, useSettingsStore } from "~/store"
import { parse } from "date-fns"
import { DATE_FORMAT } from "~/const"

const { course, specialties, group, isNewUser } = $(useSettingsStore())
const { subjects, classes } = $(useDataStore())

const router = useRouter()
onBeforeMount(() => { if (isNewUser) router.replace('/') })

const route = useRoute()
let classId = $ref((route.query.classId as string) ?? '')

function setClassIdQuery(key?: string) {
  if (key) {
    router.replace({ query: { classId: key }})
    classId = key
  } else {
    router.replace({})
    classId = ''
  }
}

interface CalendarAttributes {
  key: string
  dates: Date[]
  customData: {
    title: string
    color: string
    room: string
    professor: string
    time: string
    note?: string
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

function getIndividualDayId(attr: { key: string, dates: Date[], targetDate: Date }): string {
  return `${attr.key}-${attr.dates.indexOf(attr.targetDate)}`
}
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
            <label
              v-for="attr in attributes"
              :for="getIndividualDayId(attr)"
              :key="getIndividualDayId(attr)"
              class="item modal-button"
              :style="`background-color: ${attr.customData.color};`"
              @click="setClassIdQuery(getIndividualDayId(attr))"
            >
              {{ attr.customData.title }}

              <teleport to="body">
                <input type="checkbox" :id="attr.key" class="modal-toggle" />
                <div class="modal" :class="{ 'modal-open': classId === getIndividualDayId(attr) }">
                  <div class="modal-box">
                    <label :for="getIndividualDayId(attr)" class="btn btn-sm btn-circle absolute right-2 top-2" @click="setClassIdQuery()">✕</label>
                    <h3 class="font-bold text-xl mb-2"><u>{{ attr.customData.title }}</u></h3>
                    <p class=""><b>Преподаватель:</b> {{ attr.customData.professor }}</p>
                    <p class=""><b>Кабинет:</b> {{ attr.customData.room }}</p>
                    <p class=""><b>Время:</b> {{ attr.customData.time }}</p>
                    <p v-if="attr.customData.note" class=""><b>Примечание:</b> {{ attr.customData.note }}</p>
                  </div>
                </div>
              </teleport>
            </label>
          </div>
        </div>
      </template>
    </calendar>

    <div class="settings">
      <div class="selectors">
        <settings-course />
        <settings-group />
      </div>
      <settings-specialty />
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper { @apply min-h-screen flex flex-col justify-center items-center }

.selectors { @apply flex justify-between mb-4 }
.settings {
  min-width: min(600px, 100%);
  max-width: max(600px, 50%);

  @apply my-4 px-4
}

.item {
  min-width: 100%;
  width: fit-content;

  @apply text-xs leading-tight rounded-sm p-1 mt-0 mb-1 block
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
