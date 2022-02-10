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

    const openDay = (meta: DateClickEvent | string) => {
      const url = typeof meta === "string" ? meta : meta.date
      router.push(`/${url}?noMonthChange=true`)
    }

    const touchStartDay = ref('')
    const handleTouchStart = ({ date }: DateClickEvent) => {
      touchStartDay.value = date
    }
    const handleTouchEnd = ({ date }: DateClickEvent) => {
      if (date === touchStartDay.value) openDay(date)
      touchStartDay.value = ''
    }

    const accessor = useAccessor()
    const group = computed(() => accessor.options.group)
    const specialties = computed(() => accessor.options.specialties)
    const date = computed(() => accessor.month)

    const value = ref(format(new Date(date.value), "yyyy-MM-dd"))
    watch([date], () => {
      value.value = format(new Date(date.value), "yyyy-MM-dd")
    })

    const events = computed(() =>
      accessor.data.events.filter(event => {
        const isGroupMatch = event.groups.includes(group.value!)
        const isForAllSpecialties = event.subject.specs.length === accessor.data.sheets.specialties.length
        const isSpecialtyMatch =
          isForAllSpecialties || event.subject.specs.some(entry => specialties.value.includes(entry))

        return isGroupMatch && isSpecialtyMatch
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
      handleTouchStart,
      handleTouchEnd
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
      @touchstart:day="handleTouchStart"
      @touchstart:date="handleTouchStart"
      @mousedown:day="handleTouchStart"
      @mousedown:date="handleTouchStart"
      @touchend:day="handleTouchEnd"
      @touchend:date="handleTouchEnd"
      @mouseup:day="handleTouchEnd"
      @mouseup:date="handleTouchEnd"
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
}

.event {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
  max-height: 48px;
}

::v-deep .v-calendar-weekly__day-label .v-btn__content {
  text-transform: capitalize;
}
</style>

<style lang="scss">
.v-calendar-weekly__day,
.v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
