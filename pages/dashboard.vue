<script setup>
const { data: surat } = await useFetch("https://equran.id/api/v2/surat");

const userName = ref(getItem("username"));

function getItem(item) {
  if (process.client) {
    return localStorage.getItem(item);
  } else {
    return undefined;
  }
}
</script>
<template>
  <div>
    <Navbar />
    <main class="pt-28 pb-24 md:pb-0 container">
      <div
        class="bg-gradient-to-br from-primary to-emerald-700 dark:bg-gradient-to-br dark:from-teal-800 dark:to-teal-900 p-5 md:p-8 flex flex-col px-6 py-4 rounded-2xl shadow-md"
      >
        <p class="text-xl md:text-2xl text-white">Assalamulaikum</p>
        <p class="text-xl md:text-3xl text-white font-semibold mt-1">
          {{ userName }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
        <CardSurat
          v-for="i in surat.data"
          :key="i.nomor"
          :nomor="i.nomor"
          :nama="i.nama"
          :nama-latin="i.namaLatin"
          :jumlah-ayat="i.jumlahAyat"
          :tempat-turun="i.tempatTurun"
        />
      </div>
    </main>
    <Footer />
  </div>
</template>
