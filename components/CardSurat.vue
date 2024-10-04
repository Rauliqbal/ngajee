<script setup>
defineProps({
  surat: String,
});
</script>
<template>
  <NuxtLink
    :to="'/surat/' + surat.nomor"
    class="flex items-center md:flex-col md:items-start py-3 px-4 bg-white dark:bg-teal-900 rounded-lg shadow-md active:bg-slate-300 transition-all duration-300 ease-out"
  >
    <span class="relative flex items-center justify-center">
      <svg
        width="36"
        height="36"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.0178 2.23325C16.2197 1.3031 14.7803 1.3031 13.9822 2.23325L11.2997 5.35948L7.19225 5.04573C5.97017 4.95238 4.95238 5.97018 5.04573 7.19225L5.35948 11.2997L6.01068 12.0586L5.35948 11.2997L2.23325 13.9822C1.3031 14.7803 1.3031 16.2197 2.23325 17.0178L5.35948 19.7003L5.04573 23.8077C4.95238 25.0298 5.97018 26.0476 7.19225 25.9543L11.2997 25.6405L13.9822 28.7668C14.7803 29.6969 16.2197 29.6969 17.0178 28.7668L19.7003 25.6405L23.8077 25.9543C25.0298 26.0476 26.0476 25.0298 25.9543 23.8077L25.6405 19.7003L28.7668 17.0178C29.6969 16.2197 29.6969 14.7803 28.7668 13.9822L25.6405 11.2997L25.9543 7.19225C26.0476 5.97018 25.0298 4.95238 23.8077 5.04573L19.7003 5.35949L17.0178 2.23325Z"
          class="stroke-primary dark:stroke-teal-600"
          stroke-width="2"
        />
      </svg>
      <span class="absolute text-center text-[12px]">{{ surat.nomor }}</span>
    </span>

    <div class="w-full flex items-center justify-between mt-4">
      <div class="ml-4 md:ml-0">
        <h2 class="text-primary dark:text-white text-lg font-semibold">
          {{ surat.namaLatin }}
        </h2>
        <h3 class="text-[12px] text-slate-500 dark:text-slate-300">
          {{ surat.tempatTurun }} - {{ surat.jumlahAyat }} ayat
        </h3>
      </div>
      <h2 class="text-primary dark:text-white text-4xl font-lateef">
        {{ surat.nama }}
      </h2>
    </div>
  </NuxtLink>
</template>
