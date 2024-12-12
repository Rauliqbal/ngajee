<script setup>
defineProps({
   userName: String,
});
</script>
<template>
   <div
      class="flex flex-col p-5 px-6 py-4 shadow-md bg-primary bg-splashImg bg-no-repeat bg-cover bg-center dark:bg-gradient-to-br dark:from-teal-800 dark:to-teal-900 md:p-8 rounded-2xl"
   >
      <p class="text-xl text-white md:text-2xl">Assalamulaikum</p>
      <p class="mt-1 text-2xl font-semibold text-white md:text-3xl">
         {{ userName }}
      </p>

      <input
         type="text"
         class="input mt-8"
         placeholder="Al-Mulk, Yasiin, Ar-Rahman"
      />
   </div>
</template>
