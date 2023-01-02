/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#3EA642",
         },
         fontFamily: {
            poppins: ["poppins", "sans-serif"],
            arab: ["Scheherazade New", "serif"],
         },
         backgroundImage: {
            "header-pattern": "url('/src/assets/bg-image.webp')",
         },
      },
   },
   plugins: [],
};
