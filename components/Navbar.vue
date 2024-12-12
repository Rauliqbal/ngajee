<script setup></script>

<template>
   <nav class="fixed inset-x-0 top-0 z-20 py-4 md:py-6 bg-white">
      <div class="container">
         <div class="flex items-center justify-between">
            <div class="w-auto md:hidden"></div>
            <div class="relative z-40">
               <NuxtLink to="/">
                  <h1 class="font-rakkas text-3xl text-primary">Ngajee</h1>
               </NuxtLink>
            </div>
            <div class="flex items-center">
               <input
                  type="checkbox"
                  class="peer hidden"
                  name="hamburger"
                  id="hamburger"
               />
               <label
                  for="hamburger"
                  class="peer-checked:hamburger z-30 block cursor-pointer md:hidden"
               >
                  <span
                     class="transition duration-200 inline-block w-7 h-[2px] bg-gray-500 rounded-xl after:rounded-xl before:rounded-xl"
                  ></span>
               </label>
               <label
                  for="hamburger"
                  class="absolute inset-0 h-screen bg-gray-900/20 backdrop-blur-sm opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"
               ></label>
               <div
                  class="peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-60px)] translate-x-[-100%] bg-white md:bg-transparent transition duration-300 md:w-auto md:static md:translate-x-0 z-20"
               >
                  <div
                     class="flex flex-col md:items-center justify-between md:flex-row px-4 h-full pb-4 md:pb-0"
                  >
                     <ul
                        class="bg-white flex px-4 pt-28 md:pb-0 space-y-5 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-12 md:pt-0"
                     >
                        <li>
                           <NuxtLink
                              class="capitalize font-josefin tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                              to="/quran"
                              >quran</NuxtLink
                           >
                        </li>
                        <li>
                           <NuxtLink
                              class="capitalize font-josefin tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                              to="/doa-doa"
                              >doa harian</NuxtLink
                           >
                        </li>
                        <li>
                           <NuxtLink
                              class="capitalize font-josefin tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                              to="#"
                              >profile</NuxtLink
                           >
                        </li>
                        <li>
                           <NuxtLink
                              class="capitalize font-josefin tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                              to="#"
                              >setting</NuxtLink
                           >
                        </li>
                     </ul>
                     <div
                        class="hidden md:block text-xl mx-8 text-gray-400 w-[2px] h-8 bg-gray-300"
                     ></div>
                     <a
                        class="btn btn-primary"
                        target="_blank"
                        href="https://github.com/Rauliqbal/ngajee"
                        >Give it Start</a
                     >
                  </div>
               </div>
            </div>
         </div>
      </div>
   </nav>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
   background: #6b7280;
   transition-delay: 0.2s, 0s;
   transition-duration: 0.2s;
   transition-property: margin, transform;
   content: "";
   position: absolute;
   width: 28px;
   height: 2px;
}

#hamburger ~ label span::after {
   margin-top: 10px;
}

#hamburger ~ label span::before {
   margin-top: -10px;
}

#hamburger:checked ~ label span {
   background-color: transparent;
}

#hamburger:checked ~ label span:before,
#hamburger:checked ~ label span:after {
   transition-delay: 0s, 0.2s;
   margin-top: 0;
}

#hamburger:checked ~ label span:before {
   transform: rotate(45deg);
}

#hamburger:checked ~ label span:after {
   transform: rotate(-45deg);
}
</style>
