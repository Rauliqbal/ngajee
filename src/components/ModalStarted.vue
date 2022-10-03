<template>
     <div
        v-show="isOpen"
        class="
          z-50
          fixed
          inset-0
          flex
          items-center
          h-screen
          w-full
          mx-auto
          px-5
          bg-white
          flex-col
        "
      >
        <div class="flex items-center justify-between">
            <h3 class="text-2xl font-semibold">Tentang Aplikasi</h3>
          </div>
          <div class="mt-4">
            <p class="text-base text-gray-700">
              Lets Cook adalah Aplikasi berbasis website untuk kalian ingin mencoba resep resep masakan indonesia yang mudah dan menyenangkan.
            </p>
            <p class="text-sm text-gray-700 mt-4 "><span class="text-gray-500">Version</span> : 1.0.0</p>
            <p class="text-sm text-gray-700 mb-4"><span class="text-gray-500">Beta Release</span> : Minggu, 24 Juli 2022</p>
            <button
              @click="isOpen = false"
              class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 focus:scale-95 transition duration-100 ease-out"
            >
              Keluar
            </button>
          </div>
      </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen:true
        }
    }
}
</script>