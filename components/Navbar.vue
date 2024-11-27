<script setup>
function showHide() {
   document.getElementById("hamburger").checked = false;
}

const colorMode = useColorMode();
const toggleTheme = () => {
   colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
   <nav
      class="fixed inset-x-0 z-20 py-6 transition-all bg-white shadow-md dark:bg-dark-primary"
   >
      <div class="container">
         <div class="flex items-center">
            <div class="relative flex items-center justify-between w-full">
               <NuxtLink to="/">
                  <h1
                     class="text-lg font-semibold md:text-2xl text-primary dark:text-slate-100"
                  >
                     Ngajee.
                  </h1>
               </NuxtLink>
               <div class="md:hidden">
                  <ToggleMode />
               </div>
            </div>

            <!-- Bottom Nav -->
            <div
               class="fixed md:relative bottom-4 inset-x-4 md:bottom-0 md:inset-x-0 md:w-3/4"
            >
               <div class="">
                  <ul
                     class="flex items-center justify-around gap-4 p-5 bg-white border shadow-lg dark:bg-teal-800/40 backdrop-blur-sm dark:md:bg-transparent md:bg-transparent md:justify-center md:p-0 rounded-xl md:shadow-none md:border-none dark:border-teal-700"
                  >
                     <li>
                        <NuxtLink
                           :class="{
                              'text-primary dark:text-primary':
                                 $route.path === '/quran',
                           }"
                           class="tracking-wide text-gray-800 capitalize transition duration-200 ease-out dark:text-slate-300 hover:text-primary"
                           to="/quran"
                        >
                           <span class="hidden md:block">Quran</span>
                           <Icon
                              size="24"
                              name="hugeicons:quran-01"
                              class="md:hidden"
                           />
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink
                           :class="{
                              'text-primary dark:text-primary':
                                 $route.path === '/doa',
                           }"
                           class="tracking-wide text-gray-800 capitalize transition duration-200 ease-out dark:text-slate-300 hover:text-primary"
                           to="/#"
                        >
                           <span class="hidden md:block">Doa Harian</span>
                           <Icon
                              size="24"
                              name="hugeicons:book-open-01"
                              class="md:hidden"
                           />
                        </NuxtLink>
                     </li>
                     <li>
                        <NuxtLink
                           :class="{
                              'text-primary dark:text-primary':
                                 $route.path === '/doa',
                           }"
                           class="tracking-wide text-gray-800 capitalize transition duration-200 ease-out dark:text-slate-300 hover:text-primary"
                           to="/#"
                        >
                           <span class="hidden md:block">Profil</span>
                           <Icon
                              size="24"
                              name="hugeicons:user"
                              class="md:hidden"
                           />
                        </NuxtLink>
                     </li>
                     <li class="hidden text-slate-600 dark:text-white md:block">
                        |
                     </li>
                     <li class="hidden md:block">
                        <ToggleMode />
                     </li>
                     <li class="hidden md:block">
                        <NuxtLink
                           to="https://github.com/Rauliqbal/ngajee"
                           target="_blank"
                           rel="external"
                        >
                           <button class="hidden text-sm btn-primary md:block">
                              Give Star
                           </button>

                           <Icon
                              size="24"
                              name="hugeicons:star"
                              class="md:hidden"
                           />
                        </NuxtLink>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>
