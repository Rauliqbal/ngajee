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
  <nav
    class="fixed inset-x-0 z-20 py-6 transition-all bg-white dark:bg-dark-primary shadow-md"
  >
    <div class="container">
      <div class="flex items-center">
        <div class="relative flex items-center justify-between w-full">
          <NuxtLink to="/">
            <h1
              class="text-lg md:text-2xl font-semibold text-primary dark:text-slate-100"
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
              class="bg-white dark:bg-teal-800/40 backdrop-blur-sm dark:md:bg-transparent md:bg-transparent flex items-center justify-around md:justify-center gap-4 p-5 md:p-0 rounded-xl shadow-lg md:shadow-none md:border-none border dark:border-teal-700"
            >
              <li>
                <NuxtLink
                  class="dark:text-slate-300 capitalize tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                  to="/dashboard"
                >
                  <span class="hidden md:block">Quran</span>
                  <Icon size="24" name="hugeicons:quran-01" class="md:hidden" />
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="dark:text-slate-300 capitalize tracking-wide hover:text-primary transition ease-out duration-200 text-gray-800"
                  to="/#"
                >
                  <span class="hidden md:block">Doa Harian</span>
                  <Icon
                    size="24"
                    name="hugeicons:book-open-01"
                    class="md:hidden"
                /></NuxtLink>
              </li>
              <li class="text-slate-600 dark:text-white hidden md:block">|</li>
              <li class="hidden md:block">
                <ToggleMode />
              </li>
              <li>
                <NuxtLink
                  to="https://github.com/Rauliqbal/ngajee"
                  target="_blank"
                  rel="external"
                >
                  <button class="btn-primary text-sm hidden md:block">
                    Give Star
                  </button>

                  <Icon size="24" name="hugeicons:star" class="md:hidden" />
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
