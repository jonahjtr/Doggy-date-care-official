/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkGreen: "#346051",
      white: "#e6ebe0", //background greenish white
      darkBeige: "#f0a202", //button and word defaultcolor
      lightBeige: "#f8f8ff",
      orange: "#F97B22",
      weird: "#af3800",
    },
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  plugins: [],
};
