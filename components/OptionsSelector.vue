<script lang="ts">
import { defineComponent, PropType, ref, toRefs, watch } from "@nuxtjs/composition-api"
import { Options } from "~/utils"
import { Specialty } from "~/types"
import { useAccessor } from "~/store"

interface Settings {
  title: string
  postfix: string
  options: string[]
}

const typeToSettingsMapper: Record<keyof Options, Settings> = {
  course: {
    title: "Выбор курса",
    postfix: "-й курс",
    options: ["1", "2"],
  },
  group: {
    title: "Выбор группы",
    postfix: "-ая академическая",
    options: ["1", "2", "3", "4"],
  },
  specialty: {
    title: "Выбор специализации",
    postfix: "",
    options: Object.values(Specialty),
  },
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<keyof Options>,
      required: true,
    },
  },
  setup(props) {
    const { type } = toRefs(props)
    const accessor = useAccessor()

    const { postfix, title, options } = typeToSettingsMapper[type.value]

    const selection = ref(accessor.options[type.value])
    watch(selection, value => {
      accessor[`SET_${type.value.toUpperCase()}`](value)
    })

    return {
      selection,
      postfix,
      title,
      options,
    }
  },
})
</script>

<template>
  <v-card>
    <v-card-title class="justify-center">{{ title }}</v-card-title>
    <v-radio-group v-model="selection" name="type" class="radio" hide-details>
      <v-radio v-for="n in options" :key="n" :label="`${n}${postfix}`" class="item" />
    </v-radio-group>
  </v-card>
</template>

<style lang="scss" scoped>
.radio {
  margin: 0;
  padding: 1rem;
}
</style>
