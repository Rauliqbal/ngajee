<script setup>
definePageMeta({
   middleware: "auth",
});
</script>
<template>
   <div class="container flex items-center justify-center h-screen">
      <div
         class="p-4 max-w-lg w-full h-[530px] flex flex-col items-center justify-center bg-primary mx-auto rounded-3xl bg-splashImg bg-no-repeat bg-center bg-cover"
      >
         <div class="flex flex-col items-center justify-center">
            <img src="/images/logo-ngajee.png" alt="" />
            <h1 class="font-rakkas text-5xl text-white mt-4">Ngajee</h1>
         </div>
      </div>
   </div>
</template>
