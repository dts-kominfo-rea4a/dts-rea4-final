/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E50914",
        secondary: {
          100: "#ffffff",
          200: "#999999",
          300: "#737373",
          400: "#333333",
          500: "#201F1F",
          600: "#141414"
        }
      },
      screens: {
        xs: "480px"
      }
    },
  },
  plugins: [],
}
