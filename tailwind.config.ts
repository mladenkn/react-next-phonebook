import colors from "tailwindcss/colors"
import { fontFamily } from "tailwindcss/defaultTheme"
import { type Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#78C9CE",
          main: "#2DA1AD",
          dark: "#2496A2",
        },
        secondary: {
          light: colors.gray[300],
          main: colors.gray[400],
          dark: colors.gray[500],
        },
        error: {
          light: colors.red[200],
        },
      },
      boxShadow: {
        homeSearch: "0 0 12px",
      },
      height: {
        0.25: "0.062rem",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      screens: {
        "xs-max": { max: "639px" },
        "sm-max": { max: "767px" },
      },
    },
  },
  plugins: [],
} satisfies Config
