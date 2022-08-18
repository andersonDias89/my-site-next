/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#18181B",
        "secondary-bg": "#1B1B1F",
        "card-bg": "#28282E",
        primary: "#8234BD",
        secondary: "#4D9E8E",
        tertiary: "#4A255C",
        "hover-button": "#752EAA",
      },
      screens: {
        titleLarge: "52px",
        subtitleLarge: "18px"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
