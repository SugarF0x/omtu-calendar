<script lang="ts">
import { defineComponent, useMeta, useRouter } from "@nuxtjs/composition-api"

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
    const reload = () => {
      document.location.reload()
    }
    return {
      router,
      reload,
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
      </v-card-text>
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
    margin-right: .5rem;
  }
  > *:last-child {
    margin-right: 0
  }
}
</style>
