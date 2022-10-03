<template>
  <div class="px-6 py-6 h-screen bg-[#DEF5F6]">
    <header class="flex items-center justify-between pb-6">
      <router-link to="/">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_105_110)">
            <rect
              width="13.4189"
              height="2.9587"
              rx="1.47935"
              transform="matrix(0.716976 -0.697098 0.716979 0.697095 6 12.0001)"
              fill="black"
            />
            <rect
              width="13.42"
              height="2.9587"
              rx="1.47935"
              transform="matrix(-0.716979 -0.697095 0.716976 -0.697098 15.6218 21.4175)"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_105_110">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </router-link>
      <h2 class="text-lg text-primary font-semibold text-center">
        {{surah.nama_latin}}
      </h2>
      <span class="text-end">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="4" r="2" fill="black" />
          <circle cx="12" cy="12" r="2" fill="black" />
          <circle cx="12" cy="20" r="2" fill="black" />
        </svg>
      </span>
    </header>

    <div class="bg-header-pattern p-6 rounded-xl bg-no-repeat bg-cover">
      <h2 class="text-xl font-semibold text-white">
        {{surah.nama_latin}}<span class="text-base font-normal"> ({{surah.arti}})</span>
      </h2>
      <h3 class="text-white mt-2">{{surah.tempat_turun}} - {{surah.jumlah_ayat}} ayat</h3>
      <h4 class="text-2xl text-white text-center mt-8">
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h4>
    </div>
    
    <CardAyat class="mt-8"/>
   
  </div>
</template>

<script>
import axios from 'axios';
import CardAyat from '@/components/CardAyat.vue'

export default {
    components:{CardAyat},

    data() {
        return {
            surah: [],
        }
    },
    methods : {
        setSurah (data) {
            this.surah = data;
        }
    },
    mounted() {
        axios
            .get("https://equran.id/api/surat/" + this.$route.params.key)
            .then((response) => this.setSurah(response.data) )
            .catch((error) => console.log(error + 'Tidak dapat response'))
    }
}
</script>