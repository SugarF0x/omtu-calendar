<script setup lang="ts">
import { useHead } from "#head"

const TITLE = "ОМТУ Календарь"
const DESCRIPTION = "Календарь расписания занятий ОМТУ"
const URL = "https://omtu.jp2.ru"

useHead({
  title: TITLE,
  link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: DESCRIPTION },
    { name: "format-detection", content: "telephone=no" },
    { name: "author", content: "https://github.com/SugarF0x" },
    { name: "og:url", content: URL },
    { name: "og:title", content: TITLE },
    { name: "og:description", content: DESCRIPTION },
    { name: "og:image", content: "/form_header.jpg" },
    { hid: "og:image:width", name: "og:image:width", content: "1600" },
    { hid: "og:image:height", name: "og:image:height", content: "800" }
  ]
})
</script>

<template>
  <NuxtPage />
</template>
