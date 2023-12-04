const { colors } = require("@material-ui/core")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#78C9CE",
          main: "#2DA1AD",
          dark: "#2496A2",
        },
        secondary: {
          main: "#BBC4C3",
          light: "#E3E3E3",
        },
        tc: {
          primary: colors.grey[500],
          secondary: "#2DA1AD",
        },
      },
      boxShadow: {
        homeSearch: "0 0 12px",
      },
      height: {
        0.25: "0.062rem"
      }
    },
  },
  plugins: [],
}

