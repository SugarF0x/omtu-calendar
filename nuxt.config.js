import colors from "vuetify/es5/util/colors"

const TITLE = "ОМТУ Календарь"
const DESCRIPTION = "Календарь расписания занятий ОМТУ"
const URL = "https://omtu.jp2.ru"

export default {
  ssr: false,
  target: "static",
  htmlAttrs: {
    lang: "ru",
  },
  head: {
    title: TITLE,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: DESCRIPTION },
      { name: "format-detection", content: "telephone=no" },
      { name: "og:url", content: URL },
      { name: "og:title", content: TITLE },
      { name: "og:description", content: DESCRIPTION },
      { name: "og:image", content: "/form_header.jpg" },
      { hid: "og:image:width", name: "og:image:width", content: "1600" },
      { hid: "og:image:height", name: "og:image:height", content: "800" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~/assets/global.scss"],
  plugins: ["~/plugins/pwa-update.ts", "~/plugins/fragment.ts", { src: '~/plugins/persist.js', mode: 'client' }],
  components: true,
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/vuetify",
    "@nuxtjs/composition-api/module",
    "nuxt-typed-vuex",
    ["nuxt-storm", { nested: true, alias: true }],
  ],
  modules: ["@nuxtjs/pwa", '@nuxt/content'],
  pwa: {
    manifest: {
      name: TITLE,
      short_name: TITLE,
      description: DESCRIPTION,
      lang: "ru",
    },
    meta: {
      name: TITLE,
      description: DESCRIPTION,
    },
  },
  content: {
    liveEdit: false,
    markdown: {
      tocDepth: 4
    }
  },
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  build: {},
  generate: {
    interval: 2000,
  },
}
