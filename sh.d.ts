import { Framework } from "vuetify"
import { Accessor } from "~/store"

declare module "vue/types/vue" {
  interface Vue {
    $vuetify: Framework
    $accessor: Accessor
  }
}

declare module "@nuxt/types" {
  interface NuxtAppOptions {
    $accessor: Accessor
  }
}
