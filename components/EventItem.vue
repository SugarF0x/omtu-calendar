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
    <v-card-title class="d-flex justify-space-between flex-nowrap text-break">
      <div>{{ event.name }}</div>
      <div class="colorCode ml-2" :style="`background-color: ${event.color}`" />
    </v-card-title>
    <v-card-text>
      <h2 v-if="event.change" class="warningMessage" :class="event.change">
        {{ event.change === 'cancelled' ? "ПЕРЕНЕСЕНО/ОТМЕНЕНО" : "ОТРАБОТКА" }}
      </h2>

      <ul>
        <li>Аудитория: {{ event.room }}</li>
        <li v-if="event.professor">Преподаватель: <br />{{ event.professor }}</li>
        <li>Начало: {{ formatEventTime(event.start) }}</li>
        <li>Конец: {{ formatEventTime(event.end) }}</li>
      </ul>

      <div v-if="event.note" class="note">
        <h3>Примечание:</h3>
        <q>{{ event.note }}</q>
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.colorCode {
  margin-bottom: auto;
  min-width: 32px;
  height: 32px;
  border-radius: 50%;
}

.warningMessage {
  margin-bottom: 1rem;
}

.cancelled {
  color: red;
}

.added {
  color: green;
}

.note {
  margin-top: 1rem;
}
</style>
