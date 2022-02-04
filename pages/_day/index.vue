<script lang="ts">
import { computed, defineComponent, useRoute } from "@nuxtjs/composition-api"
import { format, isBefore, isSameDay, isSameMonth, parse, startOfMonth } from "date-fns"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const route = useRoute()
    const accessor = useAccessor()
    const group = computed(() => accessor.options.group)
    const specialties = computed(() => accessor.options.specialties)
    const month = computed(() => accessor.month)

    const day = computed(() => route.value.params.day)
    const parsedDate = computed(() => {
      if (!day.value) return null

      const date = parse(day.value, "yyyy-MM-dd", new Date())
      if (!isSameMonth(date, new Date(month.value))) accessor.SET_MONTH(startOfMonth(new Date(day.value)).toISOString())

      return date
    })
    const localedDate = computed(() => (parsedDate.value ? format(parsedDate.value, "dd MMMM") : null))

    const events = computed(() => {
      if (!parsedDate.value) return []

      return accessor.data.events.filter(event => {
        const isGroupMatch = event.groups.includes(group.value!)
        const isForAllSpecialties = event.specialties.length === accessor.data.sheets.specialties.length
        const isSpecialtyMatch = isForAllSpecialties || event.specialties.some(entry => specialties.value.includes(entry))
        const isDayMatch = isSameDay(event.start, parsedDate.value!)

        return isGroupMatch && isSpecialtyMatch && isDayMatch
      }).sort((a, b) => (isBefore(a.start, b.start) ? -1 : 1))
    })

    return {
      events,
      localedDate,
    }
  },
})
</script>

<template>
  <v-container>
    <div class="d-flex justify-end">
      <v-sheet class="d-inline-block pa-3 display-1 mb-3">{{ localedDate }}</v-sheet>
    </div>

    <v-card v-if="!events.length">
      <v-card-title class="justify-center">Сегодня занятий нет</v-card-title>
    </v-card>

    <div v-else v-frag>
      <event-item v-for="event in events" :key="event.id" :event="event" class="mb-3" />
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
