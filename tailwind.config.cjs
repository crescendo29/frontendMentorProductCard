/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    letterSpacing: {
      widest:'0.30em'
    },
    screens: {
      sm: "375px",
      md: "1440px"
    },
    extend: {
      colors: {
        darkCyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        veryDarkBlue: "hsl(212, 21%, 14%)",
        darkGrayishBlue: "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}
