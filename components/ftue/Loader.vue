<script setup lang="ts">
import lang from './Loader.lang.json'
import { useConfigStore } from "~/store"

const { isLoading } = $(useConfigStore())
</script>

<template>
  <div>
    <main v-if="isLoading" class="loaderWrapper">
      <h1>{{ lang.title }}</h1>
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
  flex-col
  justify-center
  items-center
}
</style>
