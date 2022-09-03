<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {

  },
})
</script>

<template>
  <v-tooltip bottom open-delay="250">
    <template #activator="{ on, attrs }">
      <v-btn icon to="/dev" exact v-bind="attrs" v-on="on">
        <v-icon>mdi-dev-to</v-icon>
      </v-btn>
    </template>
    <span>Административная панель</span>
  </v-tooltip>
</template>

<style lang="scss" scoped></style>
