<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api"
import { format } from "date-fns"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const date = computed(() => accessor.options.date)

    const monthLocale = computed(() => format(new Date(date.value), "MMMM yyyy"))
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
  <v-card>
    <v-card-title class="justify-center">{{ monthLocale }}</v-card-title>
    <v-card-actions>
      <v-btn @click="handleMonthDecrease">&lt;</v-btn>
      <v-spacer />
      <v-btn @click="handleMonthIncrease">&gt;</v-btn>
    </v-card-actions>
  </v-card>
</template>
