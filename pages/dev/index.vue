<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const isDevModeEnabled = ref(accessor.env.isDev)
    const toggleDevMode = () => { accessor.env.TOGGLE_DEV_MODE() }

    return {
      isDevModeEnabled,
      toggleDevMode,
    }
  },
})
</script>

<template>
  <v-container>
    <v-card class="d-flex flex-wrap pa-5 mt-3">
      <h1>Административная панель</h1>
      <v-switch v-model="isDevModeEnabled" label="Режим разработчика" hide-details class="ml-auto my-auto" @change="toggleDevMode" />
    </v-card>
    <v-card class="mt-5 pa-5" :disabled="!isDevModeEnabled">
      <h2>Таблицы курсов</h2>
      <small class="grey--text">Указанный ID Google таблицы будет использован в качестве данных для соответствующего курса</small>
      <small class="grey--text">При включённом режиме разработки, данные из shets.json не подтягиваются</small>
      <div class="mt-3">
        <dev-sheets-id-input :course="1" />
        <dev-sheets-id-input :course="2" />
      </div>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped></style>
