<script lang="ts">
import { computed, defineComponent, useRouter } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

const contact = "antuzov"

export default defineComponent({
  layout: "clear",
  setup() {
    const router = useRouter()
    const accessor = useAccessor()

    const options = computed(() => accessor.options)
    const group = computed(() => options.value.group)
    const course = computed(() => options.value.course)
    const specialty = computed(() => options.value.specialty)

    const isDisabled = computed(() => group.value === null || course.value === null || specialty.value === null)

    const proceed = () => {
      router.replace("/")
    }

    return {
      isDisabled,
      proceed,
      contact,
    }
  },
})
</script>

<template>
  <div class="wrapper">
    <h1>ОМТУ Каледнарь занятий</h1>
    <p>Похоже, вы здесь первый раз или давно не заходили</p>
    <p>Пожалуйтса, выберите курс, группу и специализацию</p>
    <p><strong>Этот выбор можно поменять позднее</strong></p>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <options-selector type="course" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <options-selector type="group" />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <options-selector type="specialty" />
        </v-col>
      </v-row>
    </v-container>
    <v-btn :disabled="isDisabled" @click="proceed">Продолжить</v-btn>
    <h2 class="mt-5"><b>ВНИМАНИЕ</b></h2>
    <p>Этот ресурс не является официальным и может содержать в себе неточности</p>
    <p>
      При нахождении ошибок, напишите Алексею в телеграмм на
      <a :href="`https://telegram.me/${contact}`" target="_blank">@{{ contact }}</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 2rem;
  text-align: center;
}
</style>
