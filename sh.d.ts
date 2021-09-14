import { Framework } from "vuetify"

declare module "vue/types/vue" {
  // 3. Объявите расширение для Vue
  interface Vue {
    $vuetify: Framework
  }
}
