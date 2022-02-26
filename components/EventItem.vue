<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "@nuxtjs/composition-api"
import { TransformedEvent } from "~/types"
import { useAccessor } from "~/store"
import { locateRawEvent } from "~/utils"

export default defineComponent({
  props: {
    event: {
      type: Object as PropType<TransformedEvent>,
      required: true,
    },
  },
  setup(props) {
    const { event } = toRefs(props)
    const accessor = useAccessor()

    const isDev = computed(() => accessor.env.isDev)
    const events = computed(() => accessor.data.sheets.events)
    const rawEvent = computed(() => locateRawEvent(events.value, event.value))

    return {
      isDev,
      rawEvent
    }
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

      <div v-if="isDev" class="mt-5">
        <h2>Debug</h2>
        <v-expansion-panels accordion class="mt-3">
          <v-expansion-panel class="grey darken-3">
            <v-expansion-panel-header>EVENT_DATA</v-expansion-panel-header>
            <v-expansion-panel-content>
              <hr>
              <pre class="mt-5">{{ JSON.stringify(event, null, 2) }}</pre>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel class="grey darken-3">
            <v-expansion-panel-header>RAW_EVENT_DATA</v-expansion-panel-header>
            <v-expansion-panel-content>
              <hr>
              <pre class="mt-5">{{ JSON.stringify(rawEvent, null, 2) }}</pre>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
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
