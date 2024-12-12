<script setup>
const username = ref("");
const isShow = ref(true);

definePageMeta({
   middleware: "auth",
});

function usernameHandle() {
   if (import.meta.env.SSR === false) {
      const name = localStorage.setItem("username", username.value);
      if (name) return navigateTo("/quran");
   } else {
      return undefined;
   }
}
</script>
<template>
   <div class="container flex items-center justify-center h-screen">
      <div
         class="p-4 max-w-lg w-full h-96 md:h-[530px] flex flex-col items-center justify-center bg-primary mx-auto rounded-3xl bg-splashImg bg-no-repeat bg-center bg-cover"
      >
         <div class="flex flex-col items-center justify-center">
            <img src="/images/logo-ngajee.png" alt="logo" />
            <h1 class="font-rakkas text-5xl text-white mt-4">Ngajee</h1>
         </div>
      </div>

      <div
         :class="isShow ? 'top-2' : '-top-full'"
         class="absolute z-50 w-full p-4 max-w-sm flex justify-center transition-all duration-300"
      >
         <form
            v-on:submit="usernameHandle"
            class="p-4 bg-white rounded-2xl flex flex-col shadow-2xl container"
         >
            <input
               type="text"
               placeholder="Siapa kamu?"
               class="input ring-1 focus:ring-primary"
               required
               v-model="username"
            />

            <button type="submit" class="btn btn-primary mt-4">Next</button>
         </form>
      </div>
   </div>
</template>
