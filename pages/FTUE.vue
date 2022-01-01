<script lang="ts">
import { computed, defineComponent, useRouter } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  layout: "clear",
  setup() {
    const router = useRouter()
    const accessor = useAccessor()

    const group = computed(() => accessor.group)
    const course = computed(() => accessor.course)

    const isDisabled = computed(() => group.value === null || course.value === null)

    const proceed = () => {
      router.replace("/")
    }

    return {
      isDisabled,
      proceed,
    }
  },
})
</script>

<template>
  <div class="wrapper">
    <h1>ОМТУ Каледнарь занятий</h1>
    <p>Похоже, вы здесь первый раз или давно не заходили</p>
    <p>Пожалуйтса, выберите курс, группу и специализацию</p>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <course-selector />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <group-selector />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <!-- Specialty selector goes here -->
        </v-col>
      </v-row>
    </v-container>
    <v-btn :disabled="isDisabled" @click="proceed">Продолжить</v-btn>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 2rem;
  text-align: center;
}
</style>
