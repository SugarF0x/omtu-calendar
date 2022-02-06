<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const selection = ref(accessor.options.group ? accessor.options.group - 1 : null )
    watch(selection, value => { accessor.options.SET_GROUP(value! + 1) })

    return {
      selection
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title>Группа</v-card-title>
    <v-radio-group v-model="selection" name="type" class="radio" hide-details>
      <v-container>
        <v-row>
          <v-col v-for="n in 4" :key="n" cols="6" class="pt-0">
            <v-radio :label="`${n}-ая ак.`" class="item" />
          </v-col>
        </v-row>
      </v-container>
    </v-radio-group>
  </v-card>
</template>

<style lang="scss" scoped>
.radio {
  margin: 0;
}
</style>
