<template>
   <div v-if="!isloaded" class="flex items-center justify-center fixed z-50 top-0 left-0 w-screen h-screen bg-white">
      <div style="border-top-color: transparent" class="w-16 h-16 border-4 border-primary border-solid rounded-full animate-spin"></div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         isloaded: false,
      };
   },
   mounted() {
      document.onreadystatechange = () => {
         if (document.readyState == "complete") {
            this.isloaded = true;
         }
      };
   },
};
</script>
