<script lang='ts'>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { addMonths, format, startOfMonth, subMonths } from 'date-fns'
import { EVENTS } from '~/assets/subjects'

interface CalendarRef {
  next: () => void
  prev: () => void
}

export default defineComponent({
  setup() {
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

    return {
      value,
      calendar,
      events,
      selectedGroup,
      handleGroupSelection,
      monthLocale,
      handleMonthIncrease,
      handleMonthDecrease,
    }
  }
})
</script>

<template>
  <v-container class='wrapper'>
    <v-row class='fill-height'>
      <v-col cols='12' md='2'>
        <v-card class='d-flex justify-center'>
          <v-radio-group v-model='selectedGroup' name='group'>
            <v-radio v-for='n in 4' :key='n' :label='`${n}-я языковая`'></v-radio>
          </v-radio-group>
        </v-card>
      </v-col>
      <v-col cols='12' md='8'>
        <v-calendar ref="calendar" v-model='value' class='calendar' :events='events' :weekdays='[1,2,3,4,5,6,0]' event-category='selectedGroup' event-overlap-mode='stack' />
      </v-col>
      <v-col cols='12' md='2'>
        <v-card>
          <v-card-title class='justify-center'>{{ monthLocale }}</v-card-title>
          <v-card-actions>
            <v-btn @click='handleMonthDecrease'>&lt;</v-btn>
            <v-spacer />
            <v-btn @click='handleMonthIncrease'>&gt;</v-btn>
          </v-card-actions>
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

.v-event.v-event-start.v-event-end {
  width: 100% !important;
  height: inherit !important;
  border-radius: 0 !important;
  border: none !important;
  margin: 0 !important;
}

.v-calendar-weekly__day, .v-calendar-weekly__head-weekday {
  margin: 0 !important;
}
</style>
