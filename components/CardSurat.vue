<script setup>
defineProps({
   nomor: Number,
   nama: String,
   namaLatin: String,
   tempatTurun: String,
   jumlahAyat: Number,
});
</script>
<template>
   <div
      class="py-4 flex justify-between items-center md:items-end gap-4 md:px-5 md:bg-white md:rounded-xl"
   >
      <div class="flex items-center lg:flex-col lg:items-start gap-2">
         <!-- No Surat -->
         <div class="flex items-center justify-center">
            <img class="w-10 h-10" src="/images/border.svg" alt="border" />
            <span class="absolute text-sm">{{ nomor }}</span>
         </div>
         <!-- Nama Surat dan Tempat Turun, Jumlah Ayat -->
         <div>
            <h3 class="font-semibold">{{ namaLatin }}</h3>
            <h6 class="text-sm text-gray-500 uppercase">
               {{ tempatTurun }} • {{ jumlahAyat }} ayat
            </h6>
         </div>
      </div>

      <p class="font-arabic text-3xl lg:text-4xl text-primary">{{ nama }}</p>
   </div>
</template>
