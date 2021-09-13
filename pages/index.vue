<script lang='ts'>
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
import { EVENTS } from '~/assets/subjects'

export default defineComponent({
  setup() {
    const selectedGroup = ref(0)

    const handleGroupSelection = (group: number) => {
      selectedGroup.value = group
    }

    const events = computed(() => EVENTS.filter(event => event.group === selectedGroup.value))

    return {
      events,
      selectedGroup,
      handleGroupSelection,
    }
  }
})
</script>

<template>
  <v-container class='wrapper'>
    <v-row class='fill-height'>
      <v-col cols='12' md='2' class='d-flex justify-center'>
        <v-radio-group v-model='selectedGroup' name='group'>
          <v-radio v-for='n in 4' :key='n' :label='`${n}-я языковая`'></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols='12' md='8'>
        <v-calendar class='calendar' :events='events' :weekdays='[1,2,3,4,5,6,0]' event-category='selectedGroup' event-overlap-mode='stack' />
      </v-col>
      <v-col cols='12' md='2'></v-col>
    </v-row>
  </v-container>
</template>

<style lang='scss'>
.wrapper {
  max-width: initial;
  height: 100%;
}

.calendar {
  margin: 0 auto;
  box-sizing: border-box;
}

.radioGroup {
  color: white;
}
</style>
