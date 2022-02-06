<script lang="ts">
import { defineComponent, onMounted } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    onMounted(() => { accessor.data.getData() })
  },
})
</script>

<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="text-center">
          <v-card-title class="justify-center">Загружаем данные...</v-card-title>
          <v-card-text>
            <v-progress-circular indeterminate />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
