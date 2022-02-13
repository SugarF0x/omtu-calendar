<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"
import { defaultState } from "~/store/env"

const label = {
  1: 'Первый курс',
  2: 'Второй курс'
}

const rules: Array<(v: string) => true | string> = [
  (v) => v.length === 44 || v.length === 0 || 'Google Sheets ID должен содержать 44 символа'
]

export default defineComponent({
  props: {
    course: {
      type: Number as PropType<1 | 2>,
      required: true
    }
  },
  setup(props) {
    const { course } = toRefs(props)
    const accessor = useAccessor()

    const defaultValue = computed(() => defaultState().tables[course.value])

    const isDev = computed(() => accessor.env.isDev)
    const value = computed(() => accessor.env.tables[course.value])
    const href = computed(() => `https://docs.google.com/spreadsheets/d/${value.value}/edit#gid=178422276`)

    const handleChange = (id: string) => {
      if (rules.every(cb => cb(id) === true)) accessor.env.SET_TABLE_ID({ course: course.value, id })
    }

    const handleRestore = () => {
      accessor.env.SET_TABLE_ID({ course: course.value, id: defaultValue.value })
    }

    const canRestore = computed(() => value.value !== defaultValue.value)
    const canOpen = computed(() => value.value !== '')

    return {
      isDev,
      label,
      value,
      handleChange,
      handleRestore,
      canRestore,
      canOpen,
      href,
      rules
    }
  },
})
</script>

<template>
  <div class="d-flex align-center">
    <v-tooltip top open-delay="250">
      <template #activator="{ on, attrs }">
        <v-btn icon :disabled="!canRestore" class="mr-1" v-bind="attrs" @click="handleRestore" v-on="on">
          <v-icon>
            mdi-restore
          </v-icon>
        </v-btn>
      </template>
      <span>Восстановить значение по-умолчанию</span>
    </v-tooltip>
    <v-text-field
      :disabled="!isDev"
      :label="label[course]"
      :value="value"
      :rules="rules"
      counter="44"
      @change="handleChange"
    />
    <v-tooltip top open-delay="250">
      <template #activator="{ on, attrs }">
        <v-btn icon :disabled="!canOpen" class="ml-1" link target="_blank" :href="href" v-bind="attrs" v-on="on">
          <v-icon>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </template>
      <span>Открыть таблицу</span>
    </v-tooltip>
  </div>
</template>

<style lang="scss" scoped></style>
