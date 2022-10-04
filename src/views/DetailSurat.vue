<template>
  <div class="px-4 pb-8 min-h-screen bg-[#DEF5F6]">
    <header class="z-30 fixed inset-x-0 bg-primary flex items-center justify-between py-6 px-4 shadow-md">
      <router-link to="/">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_105_110)">
            <rect width="13.4189" height="2.9587" rx="1.47935" transform="matrix(0.716976 -0.697098 0.716979 0.697095 6 12.0001)" fill="white" />
            <rect width="13.42" height="2.9587" rx="1.47935" transform="matrix(-0.716979 -0.697095 0.716976 -0.697098 15.6218 21.4175)" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_105_110">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </router-link>
      <h2 class="text-lg text-white font-semibold text-center">
        {{ surah.nama_latin }}
      </h2>
      <input class="peer hidden" type="checkbox" name="hamburger" id="hamburger" />
      <label class="peer-checked:hamburger z-30 cursor-pointer" for="hamburger">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="4" r="2" fill="white" />
          <circle cx="12" cy="12" r="2" fill="white" />
          <circle cx="12" cy="20" r="2" fill="white" />
        </svg>
      </label>
      <div class="absolute top-0 left-0 bottom-0 h-screen bg-black/40 w-full translate-x-full peer-checked:-translate-x-0 transition-all duration-300">
        <div class="bg-white h-full ml-auto max-w-[18rem] flex flex-col">
          <div class="flex flex-col bg-primary py-8 px-6">
            <h1 class="text-white text-2xl font-semibold">Daftar Surat</h1>
          </div>
          <div class="flex flex-col pt-2 overflow-auto">
            <ListSurat />
          </div>

          <div class="flex flex-col items-center justify-center mt-auto py-4">
            <h3 class="text-base text-primary">Develop with</h3>
            <h5 class="text-slate-500 text-sm">Raul Raisha</h5>
          </div>
        </div>
      </div>
    </header>

    <div class="pt-24">
      <div class="bg-header-pattern p-6 rounded-xl bg-no-repeat bg-cover">
        <h2 class="text-xl font-semibold text-white">
          {{ surah.nama_latin }}<span class="text-base font-normal"> ({{ surah.arti }})</span>
        </h2>
        <h3 class="text-white mt-2">{{ surah.tempat_turun }} - {{ surah.jumlah_ayat }} ayat</h3>
        <h4 class="text-2xl text-white text-center mt-8">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h4>
        <audio class="w-full h-8 mt-8" :src="surah.audio" controls></audio>
      </div>
    </div>

    <CardAyat class="mt-8" />
  </div>
</template>

<script>
import axios from "axios";
import CardAyat from "@/components/CardAyat.vue";
import ListSurat from "@/components/ListSurat.vue";

export default {
  components: { CardAyat, ListSurat },

  data() {
    return {
      surah: [],
    };
  },
  methods: {
    setSurah(data) {
      this.surah = data;
    },
  },
  mounted() {
    axios
      .get("https://equran.id/api/surat/" + this.$route.params.key)
      .then((response) => this.setSurah(response.data))
      .catch((error) => console.log(error + "Tidak dapat response"));
  },
};
</script>
