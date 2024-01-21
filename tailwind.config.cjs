/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist Variable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "bleu-de-france": "#118CEF",
        "navy-blue": "#0C056D",
      },
    },
  },
  plugins: [],
};
