/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
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
        primary: '#3aada9',
        'dark-primary': '#113b3d'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lateef: ['Lateef', "serif"]
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1180px'
        }
      }
    },
  },
  plugins: [],
}

