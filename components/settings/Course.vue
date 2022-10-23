<script setup lang="ts">
import lang from './Course.lang.json'
import { useSettingsStore } from "~/store"

const { course } = $(useSettingsStore())
</script>

<template>
  <div class="flex flex-col">
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title justify-center">{{ lang.title }}</h2>
        <div class="btn-group justify-center">
          <input class="btn" type="radio" name="options" data-title="1" value="0" v-model="course" />
          <input class="btn" type="radio" name="options" data-title="2" value="1" v-model="course" />
        </div>
      </div>
    </div>
  </div>
</template>
