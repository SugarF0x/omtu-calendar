<script lang="ts">
import { computed, defineComponent, ref } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"
import pkg from '~/package.json'

const version = pkg.version

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const isDataLoaded = computed(() => accessor.data.isDataLoaded)

    const isFTUE = computed(() => accessor.isFTUE)
    const isFTUEConfirmed = ref(!isFTUE.value)
    const confirmFTUE = () => { isFTUEConfirmed.value = true }

    const drawer = ref<null | boolean>(null)

    return {
      version,
      drawer,
      isDataLoaded,
      isFTUE,
      isFTUEConfirmed,
      confirmFTUE
    }
  },
})
</script>

<template>
  <v-app>
    <DataLoaderModal v-if="!isDataLoaded" />
    <FTUE v-else-if="isFTUE || !isFTUEConfirmed" @confirm="confirmFTUE" />

    <div v-else v-frag>
      <v-navigation-drawer v-model="drawer" right fixed app width="280">
        <v-container class="flex-column drawer">
          <month-selector class="item" />
          <course-selector class="item" />
          <group-selector class="item" />
          <specialty-picker class="item" />
          <data-refetch class="item" />
        </v-container>
      </v-navigation-drawer>

      <v-app-bar app class="navbar">
        <v-toolbar-title>
          <router-link to="/" class="link">
            ОМТУ Календрь
          </router-link>
          <a class="version" target="_blank" href="https://github.com/SugarF0x/omtu-calendar/blob/master/CHANGELOG.md">v.{{ version }}</a>
        </v-toolbar-title>

        <v-spacer />

        <v-app-bar-nav-icon class="d-flex d-lg-none" @click="drawer = !drawer">
          <v-icon>mdi-cog</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>

      <v-main>
        <nuxt />
      </v-main>
    </div>
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
}

.version {
  font-size: .5em;
}
</style>
