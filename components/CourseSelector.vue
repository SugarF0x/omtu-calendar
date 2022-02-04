<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const selection = ref(accessor.options.course ? accessor.options.course - 1 : null )
    watch(selection, value => { accessor.SET_COURSE(value! + 1) })

    return {
      selection
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title>Курс</v-card-title>
    <v-radio-group v-model="selection" name="type" class="radio" hide-details>
      <v-container>
        <v-row>
          <v-col v-for="n in 2" :key="n" cols="6" class="pt-0">
            <v-radio disabled :label="`${n}-й курс`" class="item" />
          </v-col>
        </v-row>
      </v-container>
    </v-radio-group>
    <small class="pb-2 red--text mx-4 d-flex">На данный момент расписание для второго курса недоступно</small>
  </v-card>
</template>

<style lang="scss" scoped>
.radio {
  margin: 0;
}
</style>
