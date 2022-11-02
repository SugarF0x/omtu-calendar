<script setup lang="ts">
import { CalendarAttributes } from "~/types"
import { format } from "date-fns"
import { DATE_FORMAT } from "~/const"

defineProps<{
  attributes: Array<CalendarAttributes & { targetDate: { start: Date } }>
}>()

const emit = defineEmits<{
  (e: 'update', id: string): void
}>()

function formatDateFromAttrs({ targetDate: { start } }: { targetDate: { start: Date } }): string {
  return format(start, DATE_FORMAT)
}

function setClassIdQuery(id: string) {
  emit('update', id)
}
</script>

<template>
  <div class="flex-grow overflow-scroll">
    <label
      v-for="attr in attributes"
      :for="formatDateFromAttrs(attr)"
      :key="formatDateFromAttrs(attr)"
      class="item modal-button"
      :style="`background-color: ${attr.customData.color};`"
      @click="setClassIdQuery(formatDateFromAttrs(attr))"
    >
      {{ attr.customData.title }}
    </label>
  </div>
</template>

<style scoped lang="scss">
.item {
  margin: .25rem;
  width: calc(100% - (.25rem * 2));
  overflow-x: scroll;

  @apply text-xs leading-tight rounded-sm p-1 block
}
</style>
