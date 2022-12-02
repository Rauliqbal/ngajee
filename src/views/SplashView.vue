<template>
   <main class="bg-gradient-to-tr from-primary to-green-700 h-screen">
      <div class="flex flex-col items-center justify-center h-screen pt-36 pb-10 px-4">
         <div>
            <img class="w-80 object-cover h-56 mx-auto" src="../assets/logo-splash.png" alt="" />
            <h1 class="text-3xl text-white font-bold text-center">My Mushaf</h1>
            <p class="text-sm text-white text-center mt-8">Jika kamu menjadikan Al-Qur'an sebagai panduan, maka kamu tidak akan pernah kehilangan arah.</p>
         </div>
         <div class="mt-auto"></div>
         <RouterLink to="/home" class="py-3 bg-yellow-500 hover:bg-yellow-600 active:scale-95 text-white font-bold px-10 rounded-md transition-all duration-200 ease-out">Mulai Membaca</RouterLink>
      </div>
   </main>
</template>
