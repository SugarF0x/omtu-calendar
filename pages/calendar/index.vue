<script setup lang="ts">
import { Calendar } from 'v-calendar'
import { onMounted, ref } from "#imports"
import { useCalendarStore } from './store'
import { storeToRefs } from "pinia"

const { cockAndBall } = storeToRefs(useCalendarStore())
onMounted(() => { cockAndBall.value = true })

const month = ref(new Date().getMonth())
const year = ref(new Date().getFullYear())
const attributes = ref([
  {
    key: 1,
    customData: {
      title: 'Lunch with mom.',
      class: 'bg-red-600 text-white',
    },
    dates: new Date(year.value, month.value, 1),
  },
  {
    key: 2,
    customData: {
      title: 'Take Noah to basketball practice',
      class: 'bg-blue-500 text-white',
    },
    dates: new Date(year.value, month.value, 2),
  },
  {
    key: 3,
    customData: {
      title: "Noah's basketball game.",
      class: 'bg-blue-500 text-white',
    },
    dates: new Date(year.value, month.value, 5),
  },
  {
    key: 4,
    customData: {
      title: 'Take car to the shop',
      class: 'bg-indigo-500 text-white',
    },
    dates: new Date(year.value, month.value, 5),
  },
  {
    key: 4,
    customData: {
      title: 'Meeting with new client.',
      class: 'bg-teal-500 text-white',
    },
    dates: new Date(year.value, month.value, 7),
  },
  {
    key: 5,
    customData: {
      title: "Mia's gymnastics practice.",
      class: 'bg-pink-500 text-white',
    },
    dates: new Date(year.value, month.value, 11),
  },
  {
    key: 6,
    customData: {
      title: 'Cookout with friends.',
      class: 'bg-orange-500 text-white',
    },
    dates: { months: 5, ordinalWeekdays: { 2: 1 } },
  },
  {
    key: 7,
    customData: {
      title: "Mia's gymnastics recital.",
      class: 'bg-pink-500 text-white',
    },
    dates: new Date(year.value, month.value, 22),
  },
  {
    key: 8,
    customData: {
      title: 'Visit great grandma.',
      class: 'bg-red-600 text-white',
    },
    dates: new Date(year.value, month.value, 25),
  },
])
</script>

<template>
  <div class="wrapper">
    <NuxtLink to="/settings">
      <button class="btn btn-primary"> go to settings </button>
    </NuxtLink>

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
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1 item"
              :class="attr.customData.class"
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
  width: fit-content;
}
</style>
