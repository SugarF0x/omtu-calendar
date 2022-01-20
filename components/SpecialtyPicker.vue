<script lang="ts">
import { computed, defineComponent, ref } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const specialtyTypes = computed(() => accessor.data.sheets.specialties)
    const specialties = computed(() => accessor.options.specialties)

    const nativeValues = ref([...accessor.options.specialties])

    const handleChange = (value: string) => {
      const newValue = [...specialties.value]
      if (newValue.includes(value)) newValue.splice(newValue.indexOf(value), 1)
      else newValue.push(value)

      accessor.SET_SPECIALTIES(newValue)
    }

    return {
      nativeValues,
      specialtyTypes,
      specialties,
      handleChange
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title class="justify-center">Выбор специализаций</v-card-title>
    <v-card-text>
      <v-checkbox v-for="spec in specialtyTypes" :key="spec.id" v-model="nativeValues" :value="spec.id" :label="spec.title" hide-details @click="handleChange(spec.id)" />
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped></style>
