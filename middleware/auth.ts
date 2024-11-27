export default defineNuxtRouteMiddleware((to, from) => {
   if (process.client) {
      const username = localStorage.getItem("username");
      if (username) return navigateTo("/quran");
   } else {
      return undefined;
   }
});
