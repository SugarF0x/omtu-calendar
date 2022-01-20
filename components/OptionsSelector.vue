<script lang="ts">
import { defineComponent, PropType, ref, toRefs, watch } from "@nuxtjs/composition-api"
import { Options } from "~/utils"
import { useAccessor } from "~/store"

interface Settings {
  title: string
  postfix: string
  options: string[]
}

type RadioOptions = keyof Pick<Options, 'group' | 'course'>

const typeToSettingsMapper: Record<RadioOptions, Settings> = {
  course: {
    title: "Выбор курса",
    postfix: "-й курс",
    options: ["1", "2"],
  },
  group: {
    title: "Выбор группы",
    postfix: "-ая академическая",
    options: ["1", "2", "3", "4"],
  }
}

export default defineComponent({
  props: {
    type: {
      type: String as PropType<RadioOptions>,
      required: true,
    },
  },
  setup(props) {
    const { type } = toRefs(props)
    const accessor = useAccessor()

    const { postfix, title, options } = typeToSettingsMapper[type.value]

    const selection = ref(accessor.options[type.value] ? accessor.options[type.value]! - 1 : null )
    watch(selection, value => {
      accessor[`SET_${type.value.toUpperCase()}`](value! + 1)
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
