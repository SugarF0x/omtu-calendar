import { Framework } from "vuetify"
import { Accessor } from "~/store"

declare module "vue/types/vue" {
  // 3. Объявите расширение для Vue
  interface Vue {
    $vuetify: Framework
    $accessor: Accessor
  }
}