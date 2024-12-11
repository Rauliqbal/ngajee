// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-11-01",
   devtools: { enabled: true },
   css: ["~/assets/css/main.css"],
   postcss: {
      plugins: {
         tailwindcss: {},
         autoprefixer: {},
      },
   },
   app: {
      head: {
         charset: "utf-8",
         viewport: "width=device-width, initial-scale=1",
         link: [
            {
               rel: "preconnect",
               href: "https://fonts.googleapis.com",
            },
            {
               rel: "stylesheet",
               href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rakkas&family=Scheherazade+New:wght@400;500;600;700&display=swap",
            },
         ],
      },
   },
});
