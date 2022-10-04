<template>
  <div class="px-4 min-h-screen">
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
      <h2 class="text-lg text-white font-semibold text-center">Cari Surat</h2>
      <div class="w-auto"></div>
    </header>

    <div class="pt-24">
      <form class="flex items-center relative">
        <input
          class="w-full py-3 px-5 border-2 border-primary focus:outline-none rounded-full focus:ring focus:ring-primary focus:border-transparent transition-all peer"
          type="text"
          placeholder="Cari surat"
          v-model="search"
          @keyup="searchSurat"
        />
        <span class="absolute right-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_105_133)">
              <circle class="stroke-slate-400" cx="10.66" cy="10.66" r="6.12354" transform="rotate(-45.1487 10.66 10.66)" stroke-width="3" />
              <rect class="fill-slate-400" x="13.2343" y="15.3368" width="3" height="10" rx="1.5" transform="rotate(-45.1487 13.2343 15.3368)" />
            </g>
            <defs>
              <clipPath id="clip0_105_133">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </form>

      <div class="grid grid-cols-1 gap-3 mt-4 pb-8">
        <div v-for="surat in surats" :key="surat.id">
          <CardSurat :surat="surat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CardSurat from "@/components/CardSurat.vue";

export default {
  name: "SearchView",
  components: { CardSurat },
  data() {
    return {
      surats: [],
      search: "",
    };
  },
  methods: {
    setSurats(data) {
      this.surats = data;
    },
    searchSurat() {
      axios
        .get("https://equran.id/api/surat?q=" + this.search)
        .then((response) => this.setSurats(response.data))
        .catch((error) => console.log(error + "Tidak dapat response"));
    },
  },
  mounted() {
    axios
      .get("https://equran.id/api/surat")
      .then((response) => this.setSurats(response.data))
      .catch((error) => console.log(error + "Tidak dapat response"));
  },
};
</script>
