<script setup>
const isOpen = ref(true);
const name = ref("");

definePageMeta({
  middleware: "auth",
});

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
      class="text-5xl md:text-6xl font-bold text-white relative after:content[''] after:relative after:bottom-0 after:left-1 after:block after:bg-white after:w-10 after:rounded-full after:h-[6px]"
    >
      Ngajee.
    </h1>

    <UModal v-model="isOpen" prevent-close>
      {{ name }}
      <div class="p-4">
        <form @submit.prevent="setName" class="flex flex-col">
          <label>
            <input
              class="w-full py-4 pl-5 pr-4 rounded-full outline-none focus:ring-primary focus:ring-2 border"
              type="text"
              placeholder="Masukkan Namamu"
              v-model="name"
            />
          </label>

          <button type="submit" class="btn-primary mt-8">Submit</button>
        </form>
      </div>
    </UModal>
  </main>
</template>
