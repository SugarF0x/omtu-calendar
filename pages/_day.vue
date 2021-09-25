<script lang="ts">
import { computed, defineComponent, useRoute } from "@nuxtjs/composition-api"
import { format, isBefore, isSameDay, parse } from "date-fns"
import { EVENTS } from "~/assets/subjects"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const route = useRoute()
    const accessor = useAccessor()
    const group = computed(() => accessor.group)

    const day = computed(() => route.value.params.day)
    const parsedDate = computed(() => (day.value ? parse(day.value, "yyyy-MM-dd", new Date()) : null))
    const localedDate = computed(() => (parsedDate.value ? format(parsedDate.value, "dd MMMM") : null))

    const events = computed(() => {
      if (!parsedDate.value) return []

      return EVENTS.filter(event => event.group === group.value && isSameDay(event.start, parsedDate.value!)).sort(
        (a, b) => (isBefore(a.start, b.start) ? -1 : 1),
      )
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
    <event-item v-for="event in events" :key="event.name" :event="event" class="mb-3" />
  </v-container>
</template>

<style lang="scss" scoped></style>
