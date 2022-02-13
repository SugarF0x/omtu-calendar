<script lang="ts">
import { defineComponent, PropType } from "@nuxtjs/composition-api"
// @ts-ignore
import { easeInOutCubic } from 'vuetify/lib/services/goto/easing-patterns'
import { ToC } from "~/types"

const options = {
  duration: 250,
  offset: 16,
  easing: easeInOutCubic
}

export default defineComponent({
  props: {
    toc: {
      type: Array as PropType<ToC[]>,
      default: () => []
    },
    activeId: {
      type: String,
      default: () => ''
    }
  },
  setup() {
    const getElement = (id: string) => document.querySelector(`#${id}`)

    return {
      options,
      getElement
    }
  },
})
</script>

<template>
  <v-card class="pa-5">
    <ul>
      <li
        v-for="link of toc"
        :key="link.id"
        :class="{ active: link.id === activeId }"
        class="li"
        @click="$vuetify.goTo(getElement(link.id), options)"
      >
        <span class="link">{{ link.text }}</span>
      </li>
    </ul>
  </v-card>
</template>

<style lang="scss" scoped>
.li {
  cursor: pointer;
  opacity: .5;

  transition: .25s ease-in-out;

  &:hover {
    opacity: 1;
  }
}

.link {
  text-decoration: none;
  color: white;
}

.active {
  color: green;
  opacity: 1;
}
</style>
