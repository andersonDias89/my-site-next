/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#13131F", 
        white: "#FEFBFB",
        secondary: "#00B37E",
        blueLight: "#FEFBFB",
        purple: "#5e58b1"
      }
    },
  },
  plugins: [],
}
