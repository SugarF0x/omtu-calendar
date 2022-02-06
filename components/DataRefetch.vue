<script lang="ts">
import { computed, defineComponent, onMounted } from "@nuxtjs/composition-api"
import { format, millisecondsInHour } from "date-fns"
import { useAccessor } from "~/store"
import { TIMETABLE_FORMAT, DAYS_FORMAT } from "~/consts"

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const error = computed(() => accessor.data.error)
    const time = computed(() => format(new Date(accessor.data.parsedUpdateTime!), `${DAYS_FORMAT} ${TIMETABLE_FORMAT}`))

    const update = () => {
      accessor.data.getData()
    }

    onMounted(() => {
      if (Date.now() - accessor.data.parsedUpdateTime! > millisecondsInHour * 24 * 7) update()
    })

    const isUpdating = computed(() => accessor.data.isLoading)

    return {
      error,
      time,
      update,
      isUpdating
    }
  },
})
</script>

<template>
  <div class="d-flex flex-column">
    <v-btn color="primary" :loading="isUpdating" @click="update">Обновить данные</v-btn>
    <small class="ml-auto grey--text">{{ time }}</small>
    <code v-if="error" class="red--text black">{{ error }}</code>
  </div>
</template>

<style lang="scss" scoped></style>
