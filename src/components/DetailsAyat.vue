<template>
     <div class="flex flex-col bg-white p-6 rounded-xl">
        <div class="flex items-start justify-evenly w-full">
            <span class="relative flex items-center justify-center">
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.0178 2.23325C16.2197 1.3031 14.7803 1.3031 13.9822 2.23325L11.2997 5.35948L7.19225 5.04573C5.97017 4.95238 4.95238 5.97018 5.04573 7.19225L5.35948 11.2997L6.01068 12.0586L5.35948 11.2997L2.23325 13.9822C1.3031 14.7803 1.3031 16.2197 2.23325 17.0178L5.35948 19.7003L5.04573 23.8077C4.95238 25.0298 5.97018 26.0476 7.19225 25.9543L11.2997 25.6405L13.9822 28.7668C14.7803 29.6969 16.2197 29.6969 17.0178 28.7668L19.7003 25.6405L23.8077 25.9543C25.0298 26.0476 26.0476 25.0298 25.9543 23.8077L25.6405 19.7003L28.7668 17.0178C29.6969 16.2197 29.6969 14.7803 28.7668 13.9822L25.6405 11.2997L25.9543 7.19225C26.0476 5.97018 25.0298 4.95238 23.8077 5.04573L19.7003 5.35949L17.0178 2.23325Z" stroke="#3EA642" stroke-width="2"/>
            </svg>
            <span class="absolute text-center text-[12px]">{{surah.nomor}}</span>
            </span>
             <h2 class="text-primary text-lg font-semibold text-end ml-auto"> بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                
        </div>
        <h3 class="text-green-800 italic font-medium text-end mt-4">"bismillāhir-raḥmānir-raḥīm(i).”</h3>
        <p class="text-slate-500 mt-8">“Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.”</p>   
    </div>
</template>