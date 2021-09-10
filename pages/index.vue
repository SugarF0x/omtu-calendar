<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {

    return {

    }
  }
})
</script>

<template>
  <v-calendar
    ref="calendar"
    v-model="value"
    :weekdays="weekday"
    :type="type"
    events="stack"
    :event-overlap-mode="mode"
    :event-overlap-threshold="30"
    :event-color="getEventColor"
  />
</template>

<style lang='scss'>

</style>
