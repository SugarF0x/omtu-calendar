<script lang="ts">
import { computed, defineComponent, onMounted, onUnmounted, ref } from "@nuxtjs/composition-api"
import { formatDistanceToNow, millisecondsInHour } from "date-fns"
import { ru } from "date-fns/locale"
import { useAccessor } from "~/store"

function getTimeDifference(timestamp: ConstructorParameters<typeof Date>[0]) {
  return formatDistanceToNow(new Date(timestamp), { includeSeconds: true, locale: ru })
}

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const error = computed(() => accessor.data.error)

    const updateKey = ref(false)
    const interval = ref(
      setInterval(() => {
        updateKey.value = !updateKey.value
      }, 100),
    )
    onUnmounted(() => {
      clearInterval(interval.value)
    })

    const localeTime = computed(
      () => (updateKey.value || true) && getTimeDifference(accessor.data.parsedUpdateTime ?? Date.now()),
    )

    const update = () => {
      accessor.data.getData()
    }

    onMounted(() => {
      if (Date.now() - accessor.data.parsedUpdateTime! > millisecondsInHour * 24) update()
    })

    const isUpdating = computed(() => accessor.data.isLoading)

    return {
      error,
      localeTime,
      update,
      isUpdating,
    }
  },
})
</script>

<template>
  <div class="d-flex flex-column">
    <v-btn color="primary" :loading="isUpdating" @click="update">Обновить данные</v-btn>
    <small class="time">{{ localeTime }} с последнего обновления</small>
    <code v-if="error" class="red--text black">{{ error }}</code>
  </div>
</template>

<style lang="scss" scoped>
.time {
  text-align: right;
  color: grey;
  line-height: 1;
  margin-top: 4px;

  &:first-letter {
    text-transform: capitalize;
  }
}
</style>
