/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#039EDB",
        secondary: "#08AC6D",
        tertiary: "#101010",
        highlight: "#89FEDA",
        MKblack: "#292929",
        footerBlack: "#161616",
      },
    },
  },
  plugins: [],
};
