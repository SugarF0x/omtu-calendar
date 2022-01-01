<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const selectedGroup = ref(accessor.group)
    watch(selectedGroup, value => {
      if (value === null) return

      localStorage.setItem("group", String(value))
      accessor.SET_GROUP(value)
    })

    return {
      selectedGroup,
    }
  },
})
</script>

<template>
  <v-card class="card">
    <v-radio-group v-model="selectedGroup" name="group" class="group" hide-details>
      <v-radio v-for="n in 4" :key="n" :label="`${n}-я языковая`" />
    </v-radio-group>
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
}

.group {
  margin: 0;
  padding: 1rem;
}
</style>
