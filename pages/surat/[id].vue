<script setup>
const { id } = useRoute().params;
const { data: surat } = await useFetch(`https://equran.id/api/v2/surat/${id}`);

console.log(surat);
</script>
<template>
  <div>
    <main class="pt-8 container">
      <LazyDetailHeader
        :nama-latin="surat.data.namaLatin"
        :arti="surat.data.arti"
        :tempat-turun="surat.data.tempatTurun"
        :jumlah-ayat="surat.data.jumlahAyat"
      />
    </main>
    <LazyFooter />
  </div>
</template>
