<script setup>
const colorMode = useColorMode();

function toggleTheme() {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
}
</script>
<template>
  <div class="flex flex-row items-center justify-center">
    <button
      v-show="colorMode.preference === 'light'"
      class="transition-transform duration-100 hover:scale-125 flex items-center justify-center"
      @click="toggleTheme"
    >
      <Icon
        size="24"
        name="solar:sun-line-duotone"
        class="bg-dark dark:bg-white"
      />
    </button>
    <button
      v-show="colorMode.preference === 'dark'"
      class="transition-transform duration-100 hover:scale-125 flex items-center justify-center"
      @click="toggleTheme"
    >
      <Icon
        size="24"
        name="solar:moon-stars-bold-duotone"
        class="bg-dark dark:bg-white"
      />
    </button>
  </div>
</template>
