/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#E9E9E9",
        200: "#979797",
        500: "#6B6B6B",
        700: "#4d4d4d",
        900: "#343434",
        1000: "#1a1a1a",
      },
      yellow: {
        200: "#D2C373",
        300: "#e6deb2",
        500: "#CBAC08",
        800: "#aea77e",
        900: "#6f6006",
      },
      purple: {
        100: "#C3A9CC",
        200: "#A280AD",
        300: "#dbd3de",
        500: "#946AA3",
        600: "#a08ba7",
        700: "#755F7D",
        800: "#29212c",
        900: "#514257",
      },
    },
    fontFamily: {
      major: ["Major Mono Display", "monospace"],
      murecho: ["Murecho", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
