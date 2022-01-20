<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api"
import { format } from "date-fns"
import { useAccessor } from "~/store"
import { TIMETABLE_FORMAT, DAYS_FORMAT } from "~/consts"

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const time = computed(() => format(new Date(accessor.data.parsedUpdateTime!), `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`))

    const update = () => {
      accessor.data.getData()
    }

    const isUpdating = computed(() => accessor.data.isLoading)

    return {
      time,
      update,
      isUpdating
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title class="justify-center">Расписание</v-card-title>
    <v-card-text class="text-center">
      Последний раз данные обновлялись:
      <br>
      {{ time }}
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" class="flex-grow-1" :loading="isUpdating" @click="update">Обновить данные</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped></style>
