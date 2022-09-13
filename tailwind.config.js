/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "540px", //640px
      md: "786px", //786pxpx
      lg: "1000px", //1024px
      xl: "1280px", //1280px
      "2xl": "1536px", //1536px
    },
    extend: {
      // backgroundImage: {
      //   iphone: "url('/images/login/download.png')",
      // },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar-hide"),
  ],
};
