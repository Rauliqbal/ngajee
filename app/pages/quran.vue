<script setup>
const {
   data: surat,
   pending,
   error,
} = await useLazyFetch("https://equran.id/api/v2/surat");
const userName = ref(getItem("username"));
const search = ref("");
const surahs = [
   "Al-Mulk",
   "Yasin",
   "Ar-Rahman",
   "Al-Kahfi",
   "Al-Waqiah"
]

function getItem(item) {
   if (import.meta.env.SSR === false) {
      return localStorage.getItem(item);
   } else {
      return undefined;
   }
}

const filteredItems = computed(() => {
   return surat.value.data.filter((item) => {
      return item.namaLatin.toLowerCase().includes(search.value.toLowerCase());
   });
});
</script>
<template>
   <Navbar />
   <main class="container pb-4 pt-28">
      <Greeting :userName="userName">
         <input type="text" class="input mt-8" placeholder="Al-Mulk, Yasiin, Ar-Rahman" v-model="search" />
      </Greeting>
      <ul>
         <li v-for="surah in filteredSurahs" :key="surah">
            {{ surah }}
         </li>
      </ul>
      <div v-if="pending" class="flex flex-col items-center justify-center py-20">
         <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary" />
         <p class="text-center text-lg mx-auto mt-4">Tunggu Sebentar Yak 🙏🏻</p>
      </div>

      <div v-else-if="error" class="flex flex-col items-center justify-center">
         <img class="max-w-lg" src="~/assets/images/no-data.svg" :alt="Error" />
         <p class="text-center text-lg md:text-2xl max-w-lg mx-auto">
            Aduhh... Datanya lagi kosong nih, Developernya juga bingung🙇🏻‍♂️
         </p>
      </div>
      <div v-else
         class="grid divide-y-[1px] divide-[#CBD5E1] md:divide-y-0 mt-10 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
         <CardSurat v-for="i in filteredItems" :key="i.nomor" :nomor="i.nomor" :nama="i.nama" :namaLatin="i.namaLatin"
            :jumlahAyat="i.jumlahAyat" :tempatTurun="i.tempatTurun" />
      </div>
   </main>
   <Footer />
</template>
