export default defineNuxtRouteMiddleware((to, from) => {
  const username = localStorage.getItem("username");
  if (username) {
    return navigateTo("/home");
  }
});
