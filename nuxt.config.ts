// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: false },
  build: {
    transpile: [/echarts/, "resize-detector"],
  },
  modules: [
    "@element-plus/nuxt",
    "@unocss/nuxt",
    "@nuxtjs/device",
    "@nuxt/content",
    "@pinia/nuxt",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
  ],
  elementPlus: {
    icon: "ElIcon",
    importStyle: "scss",
    themes: ["dark"],
  },
  css: ["~/assets/scss/index.scss"],
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: "",
  },
  unocss: {
    uno: true,
    attributify: true,
    icons: {
      scale: 1.2,
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
        },
      },
    },
  },
  // ssr: false,
});
