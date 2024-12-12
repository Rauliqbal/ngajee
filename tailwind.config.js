/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B5AA'
      },
      fontFamily: {
        rakkas: ["Rakkas", 'serif'],
        poppins: ["Poppins", 'sans-serif'],
        arabic: ["Scheherazade New", 'serif']
      },
      backgroundImage: {
        splashImg: "url('/images/backgroundSplash.svg')"
      },
      container: {
        padding: '1rem',
        center: true
      }
    },
  },
  plugins: [],
}

