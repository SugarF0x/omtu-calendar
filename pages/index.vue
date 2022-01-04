<script lang="ts">
import { computed, defineComponent, ref, useRouter } from "@nuxtjs/composition-api"
import { parse, isSameDay, format } from "date-fns"
import { EVENTS } from "~/assets/subjects"
import { useAccessor } from "~/store"
import { useVuetify } from "~/hooks"

interface DateClickEvent {
  date: string
  year: number
  month: number
  day: number
}

export default defineComponent({
  middleware: ["FTUE"],
  setup() {
    const router = useRouter()
    const openDay = (meta: DateClickEvent | string) => {
      const url = typeof meta === "string" ? meta : meta.date
      router.push(`/${url}`)
    }

    const accessor = useAccessor()
    const group = computed(() => accessor.options.group)
    const date = computed(() => accessor.date)

    const vuetify = useVuetify()
    const value = ref(format(new Date(date.value), "yyyy-MM-dd"))

    const events = computed(() => EVENTS.filter(event => event.group === group.value))

    const isWide = computed(() => !["xs", "sm"].includes(vuetify.breakpoint.name))
    const weekdays = computed(() => [1, 2, 3, 4, 5, 6, isWide.value ? 0 : null].filter(n => n !== null))

    const getEvents = (value: string) => {
      const date = parse(value, "yyyy-MM-dd", new Date())
      return events.value.filter(event => isSameDay(event.start, date))
    }

    return {
      value,
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
      v-model="test"
      class="calendar"
      :weekdays="weekdays"
      event-category="selectedGroup"
      event-overlap-mode="stack"
      @click:date="openDay"
      @click:event="openDay"
      @click:day="openDay"
    >
      <template #day="{ date }">
        <v-sheet
          v-for="event in getEvents(date)"
          :key="event.name"
          tile
          :color="event.color"
          class="event"
          @click="openDay(date)"
        >
          {{ event.name }}
        </v-sheet>
      </template>
    </v-calendar>
  </v-container>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  display: flex;
  align-items: center;
}

.calendar {
  max-height: 160vw;
  box-sizing: border-box;
}

.event {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  max-height: 48px;
}
</style>

<style lang="scss">
.v-calendar-weekly__day,
.v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
