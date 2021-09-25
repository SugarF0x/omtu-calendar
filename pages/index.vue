<script lang="ts">
import { computed, defineComponent, ref, useRouter, watch, wrapProperty } from "@nuxtjs/composition-api"
import { parse, isSameDay } from "date-fns"
import { EVENTS } from "~/assets/subjects"
import { useAccessor } from "~/store"

interface CalendarRef {
  next: () => void
  prev: () => void
}

interface DateClickEvent {
  date: string
  year: number
  month: number
  day: number
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const openDay = (meta: DateClickEvent) => {
      router.push(`/?day=${meta.date}`)
    }

    const accessor = useAccessor()
    const group = computed(() => accessor.group)
    const month = computed(() => accessor.month)

    const calendarRef = ref<CalendarRef | null>(null)
    watch(month, (n, o) => {
      if (n === o) return
      n > o ? calendarRef.value?.next() : calendarRef.value?.prev()
    })

    const vuetify = wrapProperty("$vuetify", false)()
    const value = ref("")

    const events = computed(() => EVENTS.filter((event) => event.group === group.value))

    const isWide = computed(() => !["xs", "sm"].includes(vuetify.breakpoint.name))
    const weekdays = computed(() => [1, 2, 3, 4, 5, 6, isWide.value ? 0 : null].filter((n) => n !== null))

    const getEvents = (value: string) => {
      const date = parse(value, "yyyy-MM-dd", new Date())
      return events.value.filter((event) => isSameDay(event.start, date))
    }

    return {
      value,
      calendarRef,
      events,
      weekdays,
      group,
      getEvents,
      isWide,
      openDay,
    }
  },
})
</script>

<template>
  <v-container class="wrapper">
    <v-calendar
      ref="calendarRef"
      v-model="value"
      class="calendar"
      :weekdays="weekdays"
      event-category="selectedGroup"
      event-overlap-mode="stack"
      @click:date="openDay"
    >
      <template #day="{ date }">
        <v-sheet v-for="event in getEvents(date)" :key="event.name" tile :color="event.color" class="event">
          {{ event.name }}
        </v-sheet>
      </template>
    </v-calendar>
  </v-container>
</template>

<style lang="scss">
.wrapper {
  max-width: initial;
  height: 100%;
}

.calendar {
  margin: 0 auto;
  box-sizing: border-box;
}

.event {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  max-height: 48px;
}

.v-calendar-weekly__day,
.v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
