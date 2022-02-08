<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api"
import { format } from "date-fns"
import { ru } from "date-fns/locale"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const date = computed(() => accessor.month)

    const monthLocale = computed(() => format(new Date(date.value), "MMM yyyy", { locale: ru }).replaceAll(".", ""))
    const handleMonthIncrease = () => {
      accessor.INC_MONTH()
    }
    const handleMonthDecrease = () => {
      accessor.DEC_MONTH()
    }

    return {
      monthLocale,
      handleMonthIncrease,
      handleMonthDecrease,
    }
  },
})
</script>

<template>
  <v-card class="pa-2 d-flex justify-space-between">
    <v-btn @click="handleMonthDecrease">&lt;</v-btn>
    <div class="title d-flex justify-center align-center text-no-wrap text-capitalize">{{ monthLocale }}</div>
    <v-btn @click="handleMonthIncrease">&gt;</v-btn>
  </v-card>
</template>
