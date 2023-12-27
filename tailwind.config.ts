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
          // vjer popravit
          light: "#E3E3E3",
          main: "#BBC4C3",
          dark: colors.gray[600],
        },
        tc: {
          // vjer izbacit
          primary: colors.gray[500],
          secondary: "#2DA1AD",
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
