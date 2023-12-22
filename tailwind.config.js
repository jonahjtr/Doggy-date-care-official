/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      darkGreen: "#346051",
      white: "#e6ebe0", //background greenish white
      darkBeige: "#f0a202", //button and word defaultcolor
      lightBeige: "#f8f8ff",
      orange: "#F97B22",
      weird: "#af3800",
      //new color names and stuff here-----
      primary: "#346051",
      accent: "#f0a202",
      white: "#e6ebe0", //background greenish white
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
  plugins: [],
};
