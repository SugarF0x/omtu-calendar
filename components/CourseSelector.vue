<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const selectedCourse = ref(accessor.course)
    watch(selectedCourse, value => {
      if (value === null) return

      localStorage.setItem("course", String(value))
      accessor.SET_COURSE(value)
    })

    return {
      selectedCourse,
    }
  },
})
</script>

<template>
  <v-card class="card">
    <v-radio-group v-model="selectedCourse" name="course" class="course" hide-details>
      <v-radio v-for="n in 2" :key="n" :label="`${n}-й курс`"></v-radio>
    </v-radio-group>
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
}

.course {
  margin: 0;
  padding: 1rem;
}
</style>
