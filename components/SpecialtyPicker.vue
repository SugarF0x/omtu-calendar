<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()
    const course = computed(() => accessor.options.course)
    const specialtyTypes = computed(() => accessor.data.sheets.specialties.filter(entry => entry.course === course.value))
    const specialties = computed(() => accessor.options.specialties)

    const initialSelection = computed(() => specialtyTypes.value.filter(entry => specialties.value.includes(entry.id)))
    const handleChange = (values: string[]) => { accessor.options.SET_SPECIALTIES([...values]) }

    return {
      specialtyTypes,
      specialties,
      initialSelection,
      handleChange,
      course
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title>Специализации</v-card-title>
    <v-card-text>
      <v-select
        class="mt-0"
        :disabled="!course"
        :value="initialSelection"
        filled
        hide-details
        multiple
        item-text="title"
        item-value="id"
        :items="specialtyTypes"
        placeholder="Без специализаций"
        @change="handleChange"
      />
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
::v-deep .v-list-item__title {
  white-space: unset;
  text-overflow: unset;
}
</style>
