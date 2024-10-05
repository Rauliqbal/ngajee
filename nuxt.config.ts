// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Ngajee - Al Quran Indonesia",
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@vite-pwa/nuxt",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
  ],
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Ngajee - Alquran Bahasa Indonesia",
      short_name: "Ngajee",
      description: "Aplikasi Al Qur'an dengan terjemah bahasa Indonesias",
      theme_color: "#3aada9",
      icons: [
        {
          src: "icons/apple-icon-60x60.png",
          sizes: "60x60",
          type: "image/png",
        },
        {
          src: "icons/apple-touch-icon-76x76.png",
          sizes: "76x76",
          type: "image/png",
        },
        {
          src: "icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    families: {
      Poppins: [400, 500, 600],
      Lateef: [400],
    },
  },
});