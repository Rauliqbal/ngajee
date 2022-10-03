<template>
  <div>
    <ModalStarted class="hidden"/>
   <div class="fixed left-0 right-0 top-0  z-20">
    <div class="bg-primary px-6 pb-6 relative shadow-md">
      <header class="grid grid-cols-3 py-6">
      <input class="peer hidden" type="checkbox" name="hamburger" id="hamburger">
      <label class="peer-checked:hamburger z-30" for="hamburger">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="6" width="24" height="3" rx="1.5" class="fill-white"/>
          <rect y="15" width="16" height="3" rx="1.5" class="fill-white"/>
        </svg>
      </label>
      <div class="absolute top-0 left-0 bottom-0 h-screen bg-black/40 w-full  -translate-x-full peer-checked:-translate-x-0 transition-all duration-300 delay-150">
        <div class="bg-white h-full max-w-[18rem] flex flex-col">
          <div class="flex flex-col bg-primary pt-16 pb-8 px-6">
            <h1 class="text-white text-2xl font-semibold">MyQuran Indonesia</h1>
            <p class="text-sm text-slate-200 mt-1">Versi 1.0.0</p>
          </div> 
          <div class="flex flex-col pt-2">
            <button @click="toggleDark" class="flex items-center justify-between px-6 py-4 hover:bg-slate-300 transition-all duration-300 ease-out">
              <span class="text-primary hover:text-green-800 transition-all duration-300">Change Theme</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_105_367)">
              <path d="M12 1.42492L14.49 3.95249C14.8696 4.33776 15.3889 4.5529 15.9297 4.54885L19.4777 4.52229L19.4512 8.07026C19.4471 8.61106 19.6622 9.13045 20.0475 9.50999L22.5751 12L20.0475 14.49C19.6622 14.8696 19.4471 15.3889 19.4512 15.9297L19.4777 19.4777L15.9297 19.4512C15.3889 19.4471 14.8696 19.6622 14.49 20.0475L12 22.5751L9.50999 20.0475C9.13045 19.6622 8.61106 19.4471 8.07026 19.4512L4.52229 19.4777L4.54885 15.9297C4.5529 15.3889 4.33776 14.8696 3.95249 14.49L1.42492 12L3.95249 9.50999C4.33776 9.13045 4.5529 8.61106 4.54885 8.07026L4.52229 4.52229L8.07026 4.54885C8.61106 4.5529 9.13045 4.33776 9.50999 3.95249L12 1.42492Z" stroke="#808080" stroke-width="2"/>
              <g clip-path="url(#clip1_105_367)">
              <path d="M19.5 12C19.5 7.858 16.1423 4.50025 12.0002 4.5H12C7.858 4.5 4.5 7.858 4.5 12C4.5 16.142 7.858 19.5 12 19.5H12.0002C16.1423 19.4997 19.5 16.142 19.5 12ZM12 19C11.9398 19 11.8803 18.997 11.82 18.9952C11.633 17.9102 11.5002 15.1883 11.5002 12C11.5002 8.81175 11.633 6.08975 11.82 5.00475C11.8803 5.003 11.9398 5 12 5C15.8663 5 19 8.134 19 12C19 15.866 15.8663 19 12 19Z" fill="#808080"/>
              <rect x="4" y="5" width="5" height="14" fill="#808080"/>
              <rect x="15.5916" y="18.5097" width="4.22254" height="1.97067" transform="rotate(-43.9232 15.5916 18.5097)" fill="#808080"/>
              <rect x="18.406" y="8.44672" width="4.01355" height="2.15261" transform="rotate(-132.228 18.406 8.44672)" fill="#808080"/>
              </g>
              <rect x="13.9901" y="4.95917" width="4.01355" height="2.83422" transform="rotate(-178.196 13.9901 4.95917)" fill="#808080"/>
              <rect x="19" y="14.2197" width="4.22254" height="2.18778" transform="rotate(-87.8856 19 14.2197)" fill="#808080"/>
              <rect x="6.0116" y="13.9592" width="4.01355" height="3.41833" transform="rotate(-178.196 6.0116 13.9592)" fill="#808080"/>
              <rect x="14.0366" y="21.7493" width="4.01355" height="2.49593" transform="rotate(-178.196 14.0366 21.7493)" fill="#808080"/>
              </g>
              <defs>
              <clipPath id="clip0_105_367">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              <clipPath id="clip1_105_367">
              <rect width="16" height="16" fill="white" transform="translate(4 4)"/>
              </clipPath>
              </defs>
              </svg>

            </button>

            <a class="flex items-center justify-between px-6 py-4 hover:bg-slate-300 transition-all duration-300 ease-out">
              <span class="text-primary hover:text-green-800 transition-all duration-300">Privacy Policy</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1C18.0775 1 23 5.9225 23 12C23 18.0775 18.0775 23 12 23C5.9225 23 1 18.0775 1 12C1 5.9225 5.9225 1 12 1ZM13.375 6.5C13.375 5.74375 12.7563 5.125 12 5.125C11.2437 5.125 10.625 5.74375 10.625 6.5C10.625 7.25625 11.2437 7.875 12 7.875C12.7563 7.875 13.375 7.25625 13.375 6.5ZM13.375 18.875V10.625H10.625V18.875H13.375Z" fill="#808080"/>
              </svg>
            </a>
          </div>

          <div class="flex flex-col items-center justify-center mt-auto mb-4">
            <h3 class="text-base text-primary ">Develop with </h3>
            <h5 class="text-slate-500 text-sm">Raul Raisha</h5>
          </div>

        </div>
      </div>
      <h1 class="text-lg text-white font-semibold text-center">My Quran</h1>
    </header>
    <h5 class="text-xl text-white text-end mb-4">السلام عليكم ورحمة الله وبركاته</h5>
      <input class="px-6 py-3 w-full rounded-full outline-none" type="search" name="search" placeholder="Cari surat...">  
    </div>
   </div>

    <div class="pt-52 grid grid-cols-1 gap-3 mt-4 pb-8 px-6">
      <div v-for="surat in surats" :key="surat.id">
        <CardSurat :surat="surat"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardSurat from '@/components/CardSurat.vue';
import ModalStarted from '@/components/ModalStarted.vue'


export default {
  name: 'HomeView',
  components: { CardSurat,ModalStarted },
  data() {
    let isDark = localStorage.getItem('darkMode') == 'true'
    return {
      surats: [],
      isOpen: false,
      isDark
    }
  },
  methods: {
    setSurats(data) {
      this.surats = data;
    },
    toggleDark() {
      this.isDark = !this.isDark;
      localStorage.setItem('darkmode', this.isDark);
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
