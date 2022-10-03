<template>
     <div
        v-show="isOpen"
        class="
          z-50
          fixed
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50
          h-screen
          max-w-md
          mx-auto
          px-5
          transition-all
        "
      >
        <div class="max-w-2xl p-6 bg-white rounded-md shadow-xl transition-all">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl font-semibold">PERHATIAN !!!</h3>
          </div>
          <div class="mt-4">
            <p class="text-lg text-yellow-500 mb-4">Jangan lupa sebelom ngaji wudhu yaa</p>
            <p class="text-base text-gray-700">
              Aplikasi berbasis website ini masih dalam pengembagan, tapi anda tidak usah khawatir karena anda masih bisa mengaji kok.
            </p>
            
            <button
              @click="isOpen = false"
              class="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-700 focus:scale-95 transition duration-100 ease-out mt-8"
            >
              Keluar
            </button>
          </div>
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