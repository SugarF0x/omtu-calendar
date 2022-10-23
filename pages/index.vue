<script setup lang="ts">
import lang from './lang.json'
import { useRouter } from "#app"
import { onBeforeMount } from "#imports"
import { useSettingsStore } from "~/store"

const { isNewUser } = $(useSettingsStore())

const router = useRouter()
onBeforeMount(() => {
  if (!isNewUser) router.replace('/calendar')
})
</script>

<template>
  <ftue-loader>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-ld">
          <h1 class="text-5xl font-bold">{{ lang.title }}</h1>
          <div class="py-6">
            <p v-for="locale in lang.paragraph" :key="locale">{{ locale }}</p>
            <p><strong>{{ lang.paragraphNote }}</strong></p>
          </div>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </ftue-loader>
</template>
