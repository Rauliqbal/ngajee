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
      class="transition-transform duration-100 hover:scale-125"
      @click="toggleTheme"
    >
      <Icon name="solar:sun-line-duotone" style="color: black" />
    </button>
    <button
      v-show="colorMode.preference === 'dark'"
      class="transition-transform duration-100 hover:scale-125"
      @click="toggleTheme"
    >
      <Icon name="solar:moon-stars-bold-duotone" style="color: black" />
    </button>
  </div>
</template>
