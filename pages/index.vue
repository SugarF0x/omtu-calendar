<script lang="ts">
import { computed, defineComponent, ref, useRouter, watch } from "@nuxtjs/composition-api"
import { parse, isSameDay, format } from "date-fns"
import { useAccessor } from "~/store"
import { useVuetify } from "~/hooks"

interface DateClickEvent {
  date: string
  year: number
  month: number
  day: number
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const vuetify = useVuetify()

    const openDay = (meta: DateClickEvent | string) => {
      const url = typeof meta === "string" ? meta : meta.date
      router.push(`/${url}`)
    }

    const accessor = useAccessor()
    const group = computed(() => accessor.options.group)
    const specialties = computed(() => accessor.options.specialties)
    const date = computed(() => accessor.options.date)

    const value = ref(format(new Date(date.value), "yyyy-MM-dd"))
    watch([date], () => {
      value.value = format(new Date(date.value), "yyyy-MM-dd")
    })

    const events = computed(() => accessor.data.events.filter(
      event =>
        event.groups.includes(group.value!)
        && (
          event.specialties.length === accessor.data.sheets.specialties.length
          || event.specialties.some(entry => specialties.value.includes(entry))
        )
      )
    )

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
      v-model="value"
      class="calendar"
      :weekdays="weekdays"
      color="red"
      event-category="selectedGroup"
      event-overlap-mode="stack"
      @touchstart:day="openDay"
      @mousedown:day="openDay"
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
          :class="event.change"
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

.cancelled {
  border: 2px solid red !important;
}

.added {
  border: 2px solid green !important;
}
</style>

<style lang="scss">
.v-calendar-weekly__day,
.v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
