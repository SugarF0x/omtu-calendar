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
  <div class='wrapper'>
    <v-calendar class='calendar' />
  </div>
</template>

<style lang='scss'>
.wrapper {
  display: flex;
  align-items: center;
  justify-items: center;
  min-height: 100vh;
  width: 100vw;
}

.calendar {
  max-width: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
