<script setup>
const { id } = useRoute().params;
const { data: surat } = await useFetch(`https://equran.id/api/v2/surat/${id}`);
</script>
<template>
  <div>
    <main class="pt-8 container">
      <LazyDetailHeader
        :nama-latin="surat.data.namaLatin"
        :arti="surat.data.arti"
        :tempat-turun="surat.data.tempatTurun"
        :jumlah-ayat="surat.data.jumlahAyat"
        :audio-full="surat.data.audioFull[Object.keys(surat.data.audioFull)[0]]"
      />
      <div class="grid gap-5 mt-10">
        <LazyDetailCardAyat
          v-for="i in surat.data.ayat"
          :key="i"
          :nomor-ayat="i.nomorAyat"
          :teks-arab="i.teksArab"
          :teks-latin="i.teksLatin"
          :teks-indonesia="i.teksIndonesia"
        />
      </div>
    </main>
    <LazyFooter />
  </div>
</template>
