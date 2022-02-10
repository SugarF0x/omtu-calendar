<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
import { TransformedEvent } from "~/types"

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<TransformedEvent>,
      required: true,
    },
  }
})
</script>

<template>
  <v-card>
    <v-card-title class="d-flex justify-space-between flex-nowrap text-break">
      <div>{{ event.subject.title }}</div>
      <div class="colorCode ml-2" :style="`background-color: ${event.subject.color}`" />
    </v-card-title>
    <v-card-text>
      <ul>
        <li>Аудитория: {{ event.room }}</li>
        <li v-if="event.subject.professor">Преподаватель: <br />{{ event.subject.professor }}</li>
        <li>Время: {{ event.time }}</li>
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
