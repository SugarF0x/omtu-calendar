<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { format } from "date-fns"
import { Event } from "~/types"

const formatEventTime = (date: Date) => format(date, "HH:mm")

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<Event>,
      required: true,
    },
  },
  setup() {
    return {
      formatEventTime,
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title class="text-break">
      <div>{{ event.name }}</div>
      <v-spacer />
      <div class="colorCode" :style="`background-color: ${event.color}`" />
    </v-card-title>
    <v-card-text>
      <ul>
        <li>Аудитория: {{ event.room }}</li>
        <li v-if="event.professor">Преподаватель: <br />{{ event.professor }}</li>
        <li>Начало: {{ formatEventTime(event.start) }}</li>
        <li>Конец: {{ formatEventTime(event.end) }}</li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.colorCode {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}
</style>
