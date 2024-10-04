<script setup>
const userName = ref(localStorage.getItem("username"));
</script>
<template>
  <h1>{{ userName }}</h1>
</template>
