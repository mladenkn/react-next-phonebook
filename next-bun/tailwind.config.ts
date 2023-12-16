const { colors } = require("@material-ui/core")
import { fontFamily } from "tailwindcss/defaultTheme";
import { type Config } from "tailwindcss";

export default {
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
          light: "#E3E3E3",
          main: "#BBC4C3",
          dark: colors.grey[600]
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
      },
      borderWidth: {
        1: "1px"
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;

