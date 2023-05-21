/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      DarkBg: "#0B0D17",
      Text: "#D0D6F9",
      White: "#FFF",
      Bar: "#383B4B",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.5rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "4xl": "12rem"
      },
    },
    fontFamily: {
      bellefair: ['"Bellefair"', "serif"],
      barlowCondensed: ['"Barlow Condensed"', "sans-serif"],
      barlow: ['"Barlow"', "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
