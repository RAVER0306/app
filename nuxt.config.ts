// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  build: {
    transpile: [/echarts/, "resize-detector"],
  },
  modules: ["@element-plus/nuxt", "@unocss/nuxt"],
  elementPlus: {
    /** Options */
  },
});
