<script setup>
const { data: surat } = await useFetch("https://equran.id/api/v2/surat");
const userName = ref(getItem("username"));
const toast = useToast();

console.log(surat);

function getItem(item) {
  if (process.client) {
    return localStorage.getItem(item);
  } else {
    return undefined;
  }
}
onMounted(() => {
  toast.add({ title: `Assalamulaikum ${userName.value}` });
});
</script>
<template>
  <UNotifications />
  <HeaderNavbar />
  <main class="pt-24">
    <div
      class="bg-primary dark:bg-teal-900 flex flex-col px-6 py-4 rounded-2xl"
    >
      <p class="text-xl md:text-2xl text-white">Assalamulaikum</p>
      <p class="text-xl md:text-3xl text-white font-semibold mt-1">
        {{ userName }}
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-10">
      <CardSurat v-for="i in surat.data" :surat="i" />
    </div>
  </main>
</template>
