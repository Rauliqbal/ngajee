<script setup>
import { useRuntimeConfig } from "#imports";

const isOpen = ref(true);
const name = ref("");
const { app } = useRuntimeConfig();

definePageMeta({
   middleware: "auth",
});

function setName() {
   if (app.isClient) {
      localStorage.setItem("username", name.value);
      navigateTo("/dashboard");
   } else {
      return undefined;
   }
}
</script>
<template>
   <main
      class="flex items-center justify-center h-screen bg-primary dark:bg-dark-primary"
   >
      <h1
         class="text-5xl md:text-6xl font-bold text-white relative after:content[''] after:relative after:bottom-0 after:left-1 after:block after:bg-white after:w-8 after:rounded-full after:h-[6px]"
      >
         Ngajee.
      </h1>

      <UModal v-model="isOpen" prevent-close>
         <div class="p-4 md:px-5 md:py-8">
            <img class="mx-auto mb-10 w-60" src="~/assets/images/quran.png" />
            <h3 class="text-xl font-semibold text-center md:text-2xl">
               Selamat datang di Ngajee.
            </h3>
            <p class="mt-4 text-center text-gray-500 dark:text-gray-300">
               Silahkan masukkan namamu terlebih dahulu
            </p>

            <form @submit.prevent="setName" class="flex flex-col mt-8">
               <label>
                  <input
                     class="w-full py-4 pl-5 pr-4 border rounded-full outline-none focus:ring-primary focus:ring-2"
                     type="text"
                     placeholder="Masukkan Namamu"
                     v-model="name"
                  />
               </label>

               <button type="submit" class="mt-8 btn-primary">Submit</button>
            </form>
         </div>
      </UModal>
   </main>
</template>
