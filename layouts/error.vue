<script lang="ts">
import { defineComponent, useMeta, useRouter } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

const contact = "antuzov"

export default defineComponent({
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  setup(props) {
    useMeta({ title: `${props.error.statusCode} ${props.error.message}` })
    const router = useRouter()
    const accessor = useAccessor()

    const reload = () => {
      document.location.reload()
    }

    const resetData = () => {
      accessor.data.RESET_STATE()
      accessor.RESET_STATE()
      accessor.CLEAR_CACHE()
      reload()
    }

    return {
      router,
      reload,
      resetData,
      contact
    }
  },
  head: {},
})
</script>

<template>
  <v-layout column justify-center align-center>
    <v-card class="d-inline-flex flex-column text-center pa-2">
      <h1 class="display-3">{{ error.statusCode }}</h1>
      <v-card-text>
        <h3>{{ error.message }}</h3>
        <code v-if="error.config" class="text-left mt-5 pa-2">
          {{ error.config }}
        </code>
        <div class="mt-3">
          Где-то когда-то что-то пошло как-то не так. Вероятнее всего произошла ошибка в данных расписания и их
          сброс и перезагрузка может помочь. Если вы продолжаете видеть это сообщение - напишите Алексею в
          телеграмм на
          <a :href="`https://telegram.me/${contact}`" target="_blank">@{{ contact }}</a>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" class="white--text flex-grow-1" @click="resetData">
          Сбросить данные
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn nuxt to="/" color="blue darken-2" class="white--text">
          <v-icon left>mdi-home</v-icon>
          Домой
        </v-btn>
        <v-spacer />
        <v-btn v-if="error.statusCode !== 404" color="blue darken-2" class="white--text" @click="reload">
          Обновить
          <v-icon right>mdi-update</v-icon>
        </v-btn>
        <v-btn v-else color="blue darken-2" class="white--text" @click="router.go(-1)">
          Назад
          <v-icon right>mdi-undo-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<style lang="scss" scoped>
.actions {
  > * {
    margin-right: 0.5rem;
  }
  > *:last-child {
    margin-right: 0;
  }
}
</style>
