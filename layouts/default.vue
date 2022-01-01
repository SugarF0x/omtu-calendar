<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api"

export default defineComponent({
  setup() {
    const drawer = ref<null | boolean>(null)

    return {
      drawer,
    }
  },
})
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right fixed app width="280">
      <v-container class="fill-height flex-column drawer">
        <month-selector class="item" />
        <options-selector type="course" class="item" />
        <options-selector type="group" class="item" />
        <options-selector type="specialty" class="item" />
      </v-container>
    </v-navigation-drawer>

    <v-app-bar app class="navbar">
      <router-link to="/" class="link">
        <v-toolbar-title> ОМТУ Календрь </v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-app-bar-nav-icon class="d-flex d-lg-none" @click="drawer = !drawer">
        <v-icon>mdi-cog</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.link {
  color: white;
  text-decoration: none;
}

.drawer {
  flex-wrap: nowrap;
}

.item {
  width: 100%;

  & + & {
    margin-top: 1rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }
}
</style>
