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
      <main class="container pb-24 pt-28 md:pb-0">
         <div
            class="flex flex-col p-5 px-6 py-4 shadow-md bg-gradient-to-br from-primary to-emerald-700 dark:bg-gradient-to-br dark:from-teal-800 dark:to-teal-900 md:p-8 rounded-2xl"
         >
            <p class="text-xl text-white md:text-2xl">Assalamulaikum</p>
            <p class="mt-1 text-xl font-semibold text-white md:text-3xl">
               {{ userName }}
            </p>

            <!-- <UInput
          color="primary"
          variant="outline"
          placeholder="Search..."
          v-model="filter"
        /> -->
         </div>

         {{ list }}

         <div class="grid gap-4 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            <CardSurat
               v-for="i in surat?.data"
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
