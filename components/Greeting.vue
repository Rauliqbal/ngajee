<script setup></script>
<template>
   <div
      class="flex flex-col p-5 px-6 py-4 shadow-md bg-gradient-to-br from-primary to-emerald-700 dark:bg-gradient-to-br dark:from-teal-800 dark:to-teal-900 md:p-8 rounded-2xl"
   >
      <p class="text-xl text-white md:text-2xl">Assalamulaikum</p>
      <p class="mt-1 text-xl font-semibold text-white md:text-3xl">
         {{ userName }}
      </p>

      <!-- <UInput
          color="primary"
          variant="outline"
          placeholder="Search..."
          v-model="filter"
        /> -->
   </div>
</template>
