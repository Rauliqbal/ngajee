/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3EA642',
      },
      fontFamily: {
        'poppins': ['poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
