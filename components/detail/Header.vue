<script setup>
defineProps({
  namaLatin: String,
  arti: String,
  tempatTurun: String,
  jumlahAyat: Number,
  audioFull: String,
});
</script>
<template>
  <div
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
    <audio
      class="w-full rounded-xl bg-primary dark:bg-dark-primary mt-4"
      controls
    >
      <source :src="audioFull" type="audio/mp3" />
    </audio>
  </div>
</template>
