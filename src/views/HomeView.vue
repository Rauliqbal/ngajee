<template>
  <div>
   <div class="fixed left-0 right-0 top-0  z-20">
    <div class="max-w-md mx-auto bg-[#DEF5F6] px-6 pb-4">
      <header class="max-w-md mx-auto grid grid-cols-3 py-6">
      <input class="peer hidden" type="checkbox" name="hamburger" id="hamburger">
      <label class="peer=checked:hamburger z-30" for="hamburger">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="24" height="3" rx="1.5" class="fill-slate-300"/>
          <rect y="15" width="16" height="3" rx="1.5" class="fill-slate-300"/>
        </svg>
      </label>
      <!-- <div class="absolute max-w-md top-0 left-0 bottom-0 h-screen bg-black/40 w-full  -translate-x-full peer-checked:-translate-x-0 transition-all duration-300">
        <div class="bg-white h-full max-w-[22rem]">
          <div class="flex flex-col bg-primary pt-16 pb-8 px-6">
            <h1 class="text-white text-2xl font-semibold">MyQuran Indonesia</h1>
            <p class="text-sm text-slate-200 mt-1">Versi 1.0.0</p>
          </div>
          <div class="flex flex-col gap-8 pt-12 px-6">
            <a href="">Change Theme</a>
            <a href="">Change Theme</a>
            <a href="">Change Theme</a>
            <a href="">Change Theme</a>
          </div>
        </div>
      </div> -->
      <h1 class="text-lg text-primary font-semibold text-center">My Quran</h1>
    </header>
    <h5 class="text-xl text-slate-500 text-end mb-4">السلام عليكم ورحمة الله وبركاته</h5>
      <input class="px-6 py-4 w-full rounded-full outline-none" type="search" name="search" placeholder="Cari surat...">  
    </div>
   </div>

    <div class="pt-48 grid grid-cols-1 gap-3 mt-4 pb-8 px-6">
      <div v-for="surat in surats" :key="surat.id">
        <CardSurat :surat="surat"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardSurat from '@/components/CardSurat.vue';
export default {
  name: 'HomeView',
  components: { CardSurat },
  data() {
    return {
      surats: [],
      isOpen: false
    }
  },
  methods: {
    setSurats(data) {
      this.surats = data;
    }
  },
  mounted() {
    axios
      .get("https://equran.id/api/surat")
      .then((response) => this.setSurats(response.data))
      .catch((error) => console.log(error + 'Tidak dapat response'))
  }
}
</script>
