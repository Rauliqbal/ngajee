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
      <main class="container pb-24 pt-28 md:pb-0">
         <Greeting userName="Rauliqbal" />

         <div
            class="grid divide-y-[1px] divide-[#CBD5E1] md:divide-y-0 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
         >
            <CardSurat
               v-for="i in surat?.data"
               :key="i.nomor"
               :nomor="i.nomor"
               :nama="i.nama"
               :namaLatin="i.namaLatin"
               :jumlahAyat="i.jumlahAyat"
               :tempatTurun="i.tempatTurun"
            />
         </div>
      </main>
      <Footer />
   </div>
</template>
