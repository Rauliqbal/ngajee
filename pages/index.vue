<script setup>
const isOpen = ref(true);
const name = ref("");

// definePageMeta({
//   middleware: "auth",
// });

function setName() {
  if (process.client) {
    localStorage.setItem("username", name.value);
    navigateTo("/dashboard");
  }
}
</script>
<template>
  <main
    class="h-screen flex items-center justify-center bg-primary dark:bg-dark-primary"
  >
    <h1
      class="text-5xl md:text-6xl font-bold text-white relative after:content[''] after:relative after:bottom-0 after:left-1 after:block after:bg-white after:w-8 after:rounded-full after:h-[6px]"
    >
      Ngajee.
    </h1>

    <UModal v-model="isOpen" prevent-close>
      <div class="p-4 md:px-5 md:py-8">
        <img class="w-60 mx-auto mb-10" src="~/assets/images/quran.png" />
        <h3 class="text-xl md:text-2xl font-semibold text-center">
          Selamat datang di Ngajee.
        </h3>
        <p class="dark:text-gray-300 text-gray-500 text-center mt-4">
          Silahkan masukkan namamu terlebih dahulu
        </p>

        <form @submit.prevent="setName" class="flex flex-col mt-8">
          <label>
            <input
              class="w-full py-4 pl-5 pr-4 rounded-full outline-none focus:ring-primary focus:ring-2 border"
              type="text"
              placeholder="Masukkan Namamu"
              v-model="name"
              required
            />
          </label>

          <button type="submit" class="btn-primary mt-8">Submit</button>
        </form>
      </div>
    </UModal>
  </main>
</template>
