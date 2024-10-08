<script setup>
const since = new Date().getFullYear();
</script>
<template>
  <footer class="py-6 hidden md:block">
    <p class="text-sm text-center text-slate-600 dark:text-slate-300">
      &copy;
      <span class="font-semibold">2022 - {{ since }}</span> Ngajee. All rights
      reserved
    </p>
  </footer>
</template>
