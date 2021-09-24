<script lang="ts">
import { defineComponent, useRoute, computed, useRouter, useContext, ref, toRefs } from "@nuxtjs/composition-api"
import { format, isSameDay, parse } from "date-fns"
import { EVENTS } from "~/assets/subjects"

export default defineComponent({
  props: {
    group: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { group } = toRefs(props)
    const route = useRoute()
    const router = useRouter()
    const context = useContext()

    const date = computed(() => route.value.query.day as string | null)
    const parsedDate = computed(() => (date.value ? parse(date.value, "yyyy-MM-dd", new Date()) : null))
    const localedDate = computed(() => (parsedDate.value ? format(parsedDate.value, "dd MMMM") : null))

    const events = computed(() =>
      parsedDate.value
        ? EVENTS.filter((event) => event.group === group.value && isSameDay(event.start, parsedDate.value!))
        : [],
    )

    const formatEventTime = (date: Date) => format(date, "HH:mm")

    const previousPath = ref("")
    const isOpen = computed(() => {
      const result = !!date.value
      if (result) {
        previousPath.value = context.from.value.fullPath
      }
      return result
    })

    const close = () => {
      if (previousPath.value === "/") router.back()
      else router.push("/")
    }

    return {
      isOpen,
      close,
      localedDate,
      events,
      formatEventTime,
    }
  },
})
</script>

<template>
  <v-dialog :value="isOpen" width="500" @click:outside="close">
    <v-card class="card">
      <v-card-title>{{ localedDate }}</v-card-title>
      <v-card-text>
        <v-card v-for="event in events" :key="event.name" color="#262626" class="subject">
          <v-card-title class="text-break">{{ event.name }}</v-card-title>
          <v-card-text>
            <ul>
              <li>Аудитория: {{ event.room }}</li>
              <li v-if="event.professor">Преподаватель: {{ event.professor }}</li>
              <li>Начало: {{ formatEventTime(event.start) }}</li>
              <li>Конец: {{ formatEventTime(event.end) }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="close">Закрыть</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.subject {
  & + & {
    margin-top: 16px;
  }
}
</style>
