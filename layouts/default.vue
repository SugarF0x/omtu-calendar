<script lang='ts'>
import { defineComponent, ref } from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const drawer = ref(null)

    return {
      drawer
    }
  }
})
</script>

<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" right fixed>
      <v-container class="fill-height flex-column">
        <group-selector />
      </v-container>
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
