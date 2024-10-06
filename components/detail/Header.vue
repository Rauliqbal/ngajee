<script setup>
defineProps({
  namaLatin: String,
  arti: String,
  tempatTurun: String,
  jumlahAyat: Number,
});
</script>
<template>
  <header
    class="bg-gradient-to-br from-primary to-emerald-700 dark:bg-gradient-to-br dark:from-teal-800 dark:to-teal-900 p-5 md:p-8 rounded-2xl"
  >
    <h2 class="text-white text-xl font-semibold">
      {{ namaLatin }}
    </h2>
    <h3 class="text-sm text-white dark:text-slate-300">{{ arti }}</h3>
    <hr class="my-4" />
    <p class="text-sm text-white dark:text-slate-300">
      {{ tempatTurun }} - {{ jumlahAyat }} Ayat
    </p>
  </header>
</template>
