<script lang="ts">
import { computed, defineComponent, useRoute, useRouter } from "@nuxtjs/composition-api"
import { format, isBefore, isSameDay, isSameMonth, parse, startOfMonth } from "date-fns"
import { ru } from "date-fns/locale"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const accessor = useAccessor()
    const group = computed(() => accessor.options.group)
    const specialties = computed(() => accessor.options.specialties)
    const month = computed(() => accessor.month)

    const shouldChangeMonth = computed(() => !route.value.query.noMonthChange)

    const day = computed(() => route.value.params.day)
    const parsedDate = computed(() => {
      if (!day.value) return null

      const date = parse(day.value, "yyyy-MM-dd", new Date())
      if (shouldChangeMonth.value && !isSameMonth(date, new Date(month.value))) accessor.SET_MONTH(startOfMonth(new Date(day.value)).toISOString())

      return date
    })
    const localedDate = computed(() => (parsedDate.value ? format(parsedDate.value, "dd MMMM", { locale: ru }) : null))

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

    const back = () => {
      router.replace('/')
    }

    return {
      events,
      localedDate,
      back
    }
  },
})
</script>

<template>
  <v-container>
    <div class="d-flex justify-end">
      <v-sheet class="d-inline-block pa-3 display-1">{{ localedDate }}</v-sheet>
    </div>

    <v-card v-if="!events.length" class="mt-3">
      <v-card-title class="justify-center">Сегодня занятий нет</v-card-title>
    </v-card>

    <template v-else>
      <event-item v-for="event in events" :key="event.id" :event="event" class="mt-3" />
    </template>

    <div class="d-flex justify-end mt-3">
      <v-btn @click="back">
        <v-icon left>mdi-undo-variant</v-icon>
        назад
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped></style>
