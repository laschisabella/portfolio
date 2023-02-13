/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
        roboto: ['"Roboto"', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}
