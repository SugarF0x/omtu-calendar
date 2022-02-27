<script lang="ts">
import { computed, defineComponent, ref, useRouter, watch } from "@nuxtjs/composition-api"
import { parse, isSameDay, format, isBefore } from "date-fns"
import { useAccessor } from "~/store"

interface DateClickEvent {
  date: string
  year: number
  month: number
  day: number
}

export default defineComponent({
  setup() {
    const router = useRouter()
    const accessor = useAccessor()

    const course = computed(() => accessor.options.course)
    const group = computed(() => accessor.options.group)
    const specialties = computed(() => accessor.options.specialties)
    const date = computed(() => accessor.month)

    const openDay = (meta: DateClickEvent | string) => {
      const url = typeof meta === "string" ? meta : meta.date
      router.push(`/${url}?noMonthChange=true`)
    }

    const value = ref(format(new Date(date.value), "yyyy-MM-dd"))
    watch([date], () => {
      value.value = format(new Date(date.value), "yyyy-MM-dd")
    })

    const events = computed(() =>
      accessor.data.events.filter(event => {
        const isCourseMatch = event.course === course.value
        const isGroupMatch = event.groups.includes(group.value!)
        const isForAllSpecialties = event.subject.specs.length === accessor.data.sheets.specialties.length
        const isSpecialtyMatch =
          isForAllSpecialties || event.subject.specs.some(entry => specialties.value.includes(entry))

        return isCourseMatch && isGroupMatch && isSpecialtyMatch
      }),
    )

    const getEvents = (value: string) => {
      const date = parse(value, "yyyy-MM-dd", new Date())
      return events.value
        .filter(event => isSameDay(event.date, date))
        .sort((a, b) => (isBefore(a.date, b.date) ? -1 : 1))
    }

    return {
      value,
      events,
      group,
      getEvents,
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
      color="red"
      :weekdays="[1, 2, 3, 4, 5, 6, 0]"
      event-category="selectedGroup"
      event-overlap-mode="stack"
      locale="ru"
      @click:day="openDay"
      @click:date="openDay"
    >
      <template #day="{ date }">
        <v-sheet
          v-for="event in getEvents(date)"
          :key="event.id"
          tile
          :color="event.subject.color"
          class="event"
          @click="openDay(date)"
        >
          {{ event.subject.title }}
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
  cursor: pointer;
}

.event {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  max-height: 48px;

  &:nth-child(2) {
    margin-top: 4px;
  }
}

::v-deep .v-calendar-weekly__day-label .v-btn__content {
  text-transform: capitalize;
}

::v-deep .v-calendar-weekly__day.v-outside .v-calendar-weekly__day-label {
  pointer-events: none;
}
</style>

<style lang="scss">
.v-calendar-weekly__day,
.v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
