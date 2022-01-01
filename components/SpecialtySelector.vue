<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"
import { Specialty } from "~/types"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const selectedSpecialty = ref(accessor.specialty)
    watch(selectedSpecialty, value => {
      if (value === null) return

      localStorage.setItem("specialty", value)
      accessor.SET_SPECIALTY(value)
    })

    return {
      selectedSpecialty,
      Specialty,
    }
  },
})
</script>

<template>
  <v-card class="card">
    <v-radio-group v-model="selectedSpecialty" name="specialty" class="specialty" hide-details>
      <v-radio v-for="n in Specialty" :key="n" :label="n" />
    </v-radio-group>
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
}

.specialty {
  margin: 0;
  padding: 1rem;
}
</style>
