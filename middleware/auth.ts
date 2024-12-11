export default defineNuxtRouteMiddleware((to, from) => {
   if (import.meta.env.SSR === false) {
      const username = localStorage.getItem("username");
      if (username) return navigateTo("/quran");
   } else {
      return undefined;
   }
});
