/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        "dark-primary": "#1d4ed8",
      },
      spacing: {
        18: "4.3rem",
      },
    },
  },
  plugins: [],
};
