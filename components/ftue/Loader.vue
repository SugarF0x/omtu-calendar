<script setup lang="ts">
import { useConfigStore } from "~/store"

const { isLoading } = $(useConfigStore())
</script>

<template>
  <div>
    <main v-if="isLoading" class="loaderWrapper">
      <progress class="progress w-56" />
    </main>

    <slot v-else />
  </div>
</template>

<style scoped lang="scss">
.loaderWrapper {
  @apply
  h-screen
  flex
  justify-center
  items-center
}
</style>
