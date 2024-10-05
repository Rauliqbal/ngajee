<script setup>
function showHide() {
  document.getElementById("hamburger").checked = false;
}

onMounted(() => {
  window.addEventListener("scroll", function () {
    let header = this.document.querySelector("header");

    header.classList.add("fixed", window.scrollY > 0);
    header.classList.toggle("bg-sticky", window.scrollY > 0);
    header.classList.remove("absolute", window.scrollY > 0);
  });
});

const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};
</script>

<template>
  <header
    class="fixed inset-x-0 z-20 py-6 transition-all bg-white dark:bg-dark-primary"
  >
    <div class="container">
      <div class="flex items-center justify-between">
        <div class="relative">
          <NuxtLink to="/">
            <h1
              class="text-lg md:text-2xl font-semibold text-primary dark:text-slate-100"
            >
              Ngajee.
            </h1>
          </NuxtLink>
        </div>
        <div class="flex items-center">
          <div class="md:hidden mr-4">
            <ToggleMode />
          </div>
          <input
            type="checkbox"
            class="peer hidden"
            name="hamburger"
            id="hamburger"
          />
          <label
            for="hamburger"
            class="relative peer-checked:hamburger z-30 block cursor-pointer md:hidden"
          >
            <span
              class="duration-200 inline-block w-7 focus:w-0 h-1 bg-black after:bg-black before:bg-black dark:bg-slate-400 dark:after:bg-slate-400 dark:before:bg-slate-400 rounded-xl after:rounded-xl before:rounded-xl"
            ></span>
          </label>
          <div
            @click="showHide"
            class="absolute inset-0 h-screen bg-gray-900/30 opacity-0 hidden peer-checked:opacity-100 peer-checked:block transition-all duration-300 md:peer-checked:hidden"
          ></div>
          <div
            class="peer-checked:translate-x-0 w-72 sm:w-96 fixed top-0 right-0 bottom-0 translate-x-full transition duration-300 md:w-auto md:static md:translate-x-0 z-20 ease-out"
          >
            <div class="flex flex-col md:items-center md:flex-row h-full">
              <ul
                class="bg-white dark:bg-teal-800 dark:md:bg-transparent md:bg-transparent flex items-center px-7 pt-28 md:pb-0 pb-[38rem] space-y-8 md:px-0 md:space-y-0 flex-col md:flex-row md:space-x-10 md:pt-0"
              >
                <li>
                  <NuxtLink
                    @click="showHide"
                    class="dark:text-slate-300 capitalize tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                    to="/dashboard"
                    >Quran</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    @click="showHide"
                    class="dark:text-slate-300 capitalize tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                    to="/#"
                    >Doa doa</NuxtLink
                  >
                </li>

                <li class="text-slate-600 dark:text-white hidden md:block">
                  |
                </li>
                <li class="hidden md:block">
                  <ToggleMode />
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/Rauliqbal/ngajee"
                    target="_blank"
                    rel="external"
                    class="btn-primary text-sm"
                    >Give Star</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
#hamburger ~ label span::after,
#hamburger ~ label span::before {
  right: 0;
  transition-delay: 0.2s, 0s;
  transition-duration: 0.1s;
  transition-property: margin, transform;
  content: "";
  position: absolute;
  width: 20px;
  height: 4px;
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
