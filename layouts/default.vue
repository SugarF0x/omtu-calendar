<script lang="ts">
import { computed, defineComponent, ref } from "@nuxtjs/composition-api"
import { useAccessor } from "~/store"
import pkg from '~/package.json'

const VERSION = pkg.version
const CHANGELOG_HREF = 'https://github.com/SugarF0x/omtu-calendar/blob/master/CHANGELOG.md'

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const isDataLoaded = computed(() => accessor.data.isDataLoaded)

    const isFTUE = computed(() => accessor.options.isFTUE)
    const isFTUEConfirmed = ref(!isFTUE.value)
    const confirmFTUE = () => { isFTUEConfirmed.value = true }

    const isDev = computed(() => accessor.env.isDev)

    const drawer = ref<null | boolean>(null)

    return {
      VERSION,
      CHANGELOG_HREF,
      drawer,
      isDataLoaded,
      isFTUE,
      isFTUEConfirmed,
      confirmFTUE,
      isDev,
    }
  },
})
</script>

<template>
  <v-app>
    <DataLoaderModal v-if="!isDataLoaded" />
    <FTUE v-else-if="isFTUE || !isFTUEConfirmed" @confirm="confirmFTUE" />

    <template v-else>
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
        <v-toolbar-title class="d-flex">
          <router-link to="/" class="link">
            ОМТУ Календарь
          </router-link>
          <v-chip class="version ml-2" color="primary" link target="_blank" :href="CHANGELOG_HREF">v.{{ VERSION }}</v-chip>
        </v-toolbar-title>

        <v-spacer />

        <v-app-bar-nav-icon v-if="isDev">
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-btn icon to="/dev" v-bind="attrs" v-on="on">
                <v-icon>mdi-dev-to</v-icon>
              </v-btn>
            </template>
            <span>Административная панель</span>
          </v-tooltip>
        </v-app-bar-nav-icon>

        <v-app-bar-nav-icon class="d-flex d-lg-none" @click="drawer = !drawer">
          <v-icon>mdi-cog</v-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>

      <v-main>
        <nuxt />
      </v-main>
    </template>
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
  font-size: .5em !important;
  height: auto !important;
  margin-top: auto !important;
  padding: 0 8px !important;
}
</style>
