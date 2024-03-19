/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1920px",
      mobileBP: "768px",
    },
    colors: {
      darkGreen: "#346051",
      darkBeige: "#f0a202", //button and word defaultcolor
      lightBeige: "#f8f8ff",
      orange: "#F97B22",
      weird: "#af3800",
      black: "#000000",
      grey: "#999999",
      purple: "#5B5BCB",
      //new color names and stuff here-----
      // primary: "#346051",
      primary: "#7C9070",
      accent: "#f0a202",
      white: "#ffffff",
      beige: "#FEE8B0",
      actWhite: "#e6ebe0",
      "cyan-700": "#7C9070",
      // white: "#e6ebe0", //background greenish white
    },
    extend: {
      padding: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
