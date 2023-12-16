/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  semi: false,
  arrowParens: "avoid",
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
