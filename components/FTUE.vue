<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  emits: ['confirm'],
  setup(_, { emit }) {
    const accessor = useAccessor()

    const options = computed(() => accessor.options)
    const group = computed(() => options.value.group)
    const course = computed(() => options.value.course)

    const isDisabled = computed(() => group.value === null || course.value === null)

    const proceed = () => { emit('confirm') }

    return {
      isDisabled,
      proceed,
    }
  },
})
</script>

<template>
  <div class="wrapper">
    <h1>ОМТУ Календарь занятий</h1>
    <p>Похоже, вы здесь первый раз или давно не заходили</p>
    <p>Пожалуйста, выберите курс, группу и специализацию</p>
    <p><strong>Этот выбор можно поменять позднее</strong></p>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="4">
          <course-selector />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <group-selector />
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <specialty-picker />
        </v-col>
      </v-row>
    </v-container>
    <v-btn class="my-4" :disabled="isDisabled" @click="proceed">Продолжить</v-btn>

    <div class="footnote">
      Календарь создан студентом ОМТУ'23,
      <a :href="`https://telegram.me/antuzov`" target="_blank">Тузовым Алексеем</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  padding: 2rem;
  text-align: center;
}

.footnote {
  font-size: .8em;
  opacity: .8;

  a {
    color: cyan;
    opacity: .8;
  }
}
</style>
