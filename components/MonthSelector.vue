<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";
import { format, getYear } from "date-fns";
import { useAccessor } from "~/store";

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const month = computed(() => accessor.month)

    const monthLocale = computed(() => format(new Date(Date.UTC(getYear(new Date()), month.value)), "MMMM"))
    const handleMonthIncrease = () => { accessor.SET_MONTH(month.value + 1) }
    const handleMonthDecrease = () => { accessor.SET_MONTH(month.value - 1) }

    return {
      monthLocale,
      handleMonthIncrease,
      handleMonthDecrease
    }
  }
});
</script>

<template>
  <v-card>
    <v-card-title class='justify-center'>{{ monthLocale }}</v-card-title>
    <v-card-actions>
      <v-btn @click='handleMonthDecrease'>&lt;</v-btn>
      <v-spacer />
      <v-btn @click='handleMonthIncrease'>&gt;</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped>

</style>
