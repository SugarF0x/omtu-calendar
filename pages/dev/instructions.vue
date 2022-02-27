<script lang="ts">
import { computed, defineComponent, onUnmounted, ref, useAsync, useContext, watch } from "@nuxtjs/composition-api"
import { ToC } from "~/types"

export default defineComponent({
  setup() {
    const { $content } = useContext()
    const content = useAsync<any>(() => $content('instructions').fetch())
    const toc = computed<ToC[]>(() => content.value?.toc || [])
    const orderedIds = computed(() => toc.value.map(entry => entry.id))

    const nuxtContent = ref(null)
    const observer = ref<IntersectionObserver | null>(null)
    const visibleIds = ref<Set<string>>(new Set())

    const lastKnownToc = ref('')
    const activeToc = computed(() => orderedIds.value.filter(entry => visibleIds.value.has(entry))[0] || lastKnownToc.value)

    watch(nuxtContent, () => {
      if (nuxtContent.value) {
        observer.value = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            const id = entry.target.getAttribute("id")!;
            if (entry.isIntersecting) {
              visibleIds.value = new Set(visibleIds.value.add(id))
            } else {
              const newSet = new Set(visibleIds.value)
              newSet.delete(id)
              visibleIds.value = newSet
              if (newSet.size === 0) lastKnownToc.value = id
            }
          });
        }, { // @ts-ignore
          root: nuxtContent.value.$el,
          threshold: 1
        });

        // Track all sections that have an `id` applied
        document
        .querySelectorAll(".nuxt-content [id]")
        .forEach(section => {
          observer.value!.observe(section);
        });
      }
    })

    onUnmounted(() => {
      observer.value?.disconnect()
    })

    return {
      nuxtContent,
      content,
      toc,
      activeToc
    }
  },
})
</script>

<template>
  <div class="d-flex ma-5">
    <dev-table-of-contents :toc="toc" :active-id="activeToc" class="toc d-none d-lg-flex" />
    <v-card class="pa-5 ml-lg-5">
      <nuxt-content ref="nuxtContent" class="content" :document="content" />
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.tableWrapper {
  width: 100%;
  overflow: scroll;
}

.content {
  table {
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid grey;
  }

  td {
    padding: 0 4px;
  }

  p:not(:first-child) {
    margin-top: 16px;
  }

  ul {
    margin: 16px 0;
  }
}

.toc {
  align-self: baseline;
  position: sticky;
  top: 84px;
}
</style>
