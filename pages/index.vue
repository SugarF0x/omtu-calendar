<script lang='ts'>
import { computed, defineComponent, ref, useRouter, wrapProperty } from "@nuxtjs/composition-api";
import { addMonths, format, startOfMonth, subMonths, parse, isSameDay } from 'date-fns'
import { EVENTS } from '~/assets/subjects'

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
    const openDay = (meta: DateClickEvent) => { router.push(`/?day=${meta.date}`) }

    const vuetify = wrapProperty('$vuetify', false)()
    const calendar = ref<CalendarRef | null>(null)
    const value = ref('')

    const selectedGroup = ref(0)
    const handleGroupSelection = (group: number) => {
      selectedGroup.value = group
    }

    const selectedMonth = ref(startOfMonth(new Date()))
    const monthLocale = computed(() => format(selectedMonth.value, "MMMM"))
    const handleMonthIncrease = () => {
      selectedMonth.value = addMonths(selectedMonth.value, 1)
      calendar.value?.next()
    }
    const handleMonthDecrease = () => {
      selectedMonth.value = subMonths(selectedMonth.value, 1)
      calendar.value?.prev()
    }

    const events = computed(() => EVENTS.filter(event => event.group === selectedGroup.value))

    const isWide = computed(() => !['xs', 'sm'].includes(vuetify.breakpoint.name))
    const weekdays = computed(() => [1,2,3,4,5,6, isWide.value ? 0 : null].filter(n => n !== null))

    const getEvents = (value: string) => {
      const date = parse(value, 'yyyy-MM-dd', new Date())
      return events.value.filter(event => isSameDay(event.start, date))
    }

    return {
      value,
      calendar,
      events,
      selectedGroup,
      handleGroupSelection,
      monthLocale,
      handleMonthIncrease,
      handleMonthDecrease,
      weekdays,
      getEvents,
      isWide,
      openDay
    }
  }
})
</script>

<template>
  <v-container class='wrapper'>
    <day-modal :group="selectedGroup"/>
    <v-row :class='isWide && "fill-height"'>
      <v-col cols='12' md='2'>
        <v-card class='d-flex justify-center'>
          <v-radio-group v-model='selectedGroup' name='group'>
            <v-radio v-for='n in 4' :key='n' :label='`${n}-я языковая`'></v-radio>
          </v-radio-group>
        </v-card>
      </v-col>
      <v-col cols='12' md='8' order='3' order-md='2'>
        <v-calendar
          ref="calendar"
          v-model='value'
          class='calendar'
          :weekdays='weekdays'
          event-category='selectedGroup'
          event-overlap-mode='stack'
          @click:date="openDay"
        >
          <template #day="{ date }">
            <v-sheet v-for='event in getEvents(date)' :key='event.name' tile :color='event.color' class='event'>
              {{ event.name }}
            </v-sheet>
          </template>
        </v-calendar>
      </v-col>
      <v-col cols='12' md='2' order='2' order-md='3'>
        <v-card class='d-none d-md-block'>
          <v-card-title class='justify-center'>{{ monthLocale }}</v-card-title>
          <v-card-actions>
            <v-btn @click='handleMonthDecrease'>&lt;</v-btn>
            <v-spacer />
            <v-btn @click='handleMonthIncrease'>&gt;</v-btn>
          </v-card-actions>
        </v-card>
        <v-card class='d-flex d-md-none justify-space-between align-center px-3'>
          <v-btn @click='handleMonthDecrease'>&lt;</v-btn>
          <div class='v-card__title'>{{ monthLocale }}</div>
          <v-btn @click='handleMonthIncrease'>&gt;</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang='scss'>
.wrapper {
  max-width: initial;
  height: 100%;
}

.calendar {
  margin: 0 auto;
  box-sizing: border-box;
}

.radioGroup {
  color: white;
}

.event {
  text-overflow: ellipsis !important;
  overflow: hidden !important;
}

.v-calendar-weekly__day, .v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
