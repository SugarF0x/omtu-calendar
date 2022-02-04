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
  <div class="d-flex flex-column">
    <v-btn color="primary">Обновить данные</v-btn>
    <small class="ml-auto grey--text">{{ time }}</small>
  </div>
</template>

<style lang="scss" scoped></style>
