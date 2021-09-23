<script lang='ts'>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const drawer = ref(false)

    return {
      drawer
    }
  }
})
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right fixed>
      <v-layout class="fill-height" column>
        <!-- Drawer content goes here -->
      </v-layout>
    </v-navigation-drawer>

    <v-app-bar app class="navbar">
      <router-link to="/" class="link">
        <v-toolbar-title>
          ОМТУ Календрь
        </v-toolbar-title>
      </router-link>

      <v-spacer />

      <v-app-bar-nav-icon @click="drawer = !drawer" >
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
</style>
