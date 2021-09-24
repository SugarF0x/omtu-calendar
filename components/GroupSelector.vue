<script lang="ts">
import { defineComponent, ref, watch } from "@nuxtjs/composition-api";
import { getInitialGroup } from "~/assets/utils";
import { useAccessor } from "~/store";

export default defineComponent({
  setup() {
    const accessor = useAccessor()

    const selectedGroup = ref(getInitialGroup())
    watch(selectedGroup, (value) => {
      localStorage.setItem('group', value.toString())
      accessor.SET_GROUP(value)
    })

    return {
      selectedGroup
    }
  }
});
</script>

<template>
  <v-card class="card">
    <v-radio-group v-model='selectedGroup' name='group' class="group" hide-details>
      <v-radio v-for='n in 4' :key='n' :label='`${n}-я языковая`'></v-radio>
    </v-radio-group>
  </v-card>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  justify-content: center;
}

.group {
  margin: 0;
  padding: 1rem;
}
</style>
