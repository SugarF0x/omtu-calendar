<script lang="ts">
import { defineComponent, onMounted, useRouter } from "@nuxtjs/composition-api"
import { millisecondsInHour } from "date-fns"
import { useAccessor } from "~/store"

export default defineComponent({
  layout: "clear",
  setup() {
    const accessor = useAccessor()
    const router = useRouter()

    onMounted(async () => {
      const isCacheLosingSuccessful = await accessor.data.loadCachedData()
      if (!isCacheLosingSuccessful || accessor.data.parsedUpdateTime! - Date.now() > millisecondsInHour * 24 * 7)
        await accessor.data.getData()
      router.push("/")
    })
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

<style lang="scss" scoped></style>
