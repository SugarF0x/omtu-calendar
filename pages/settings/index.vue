<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useConfigStore, useSettingsStore } from "~/store"

const settingsStore = useConfigStore()
const { fetchConfig } = settingsStore
const { config } = storeToRefs(settingsStore)
const { specialties, course, group } = storeToRefs(useSettingsStore())
</script>

<template>
  <div class="wrapper">
    <h2> Specialties </h2>
    <pre>
      {{ JSON.stringify(specialties, null, 2) }}
    </pre>

    <h2> Course </h2>
    <pre>
      {{ JSON.stringify(course, null, 2) }}
    </pre>

    <h2> Group </h2>
    <pre>
      {{ JSON.stringify(group, null, 2) }}
    </pre>

    <h2> Config </h2>
    <pre style="font-size: .75em">
      {{ JSON.stringify(config, null, 2) }}
    </pre>

    <button @click="fetchConfig"> fetch cock and ball </button>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
</style>
