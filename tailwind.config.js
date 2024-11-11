/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "0 5px 15px 3px rgba(0, 0, 0, 1), 0 1px 2px 2px rgba(0, 0, 0, 1)",
      },
      colors: {
        gray: {
          100: "#d4d4d4",
          200: "#CFCFCF",
          300: "#ABABAB",
          600: "#646464",
          900: "#333",
        },
        yellow: {
          theme: "#CBAC08",
        },
        purple: {
          theme: "#946AA3",
        },
      },
      fontFamily: {
        major: ["Major Mono Display", "monospace"],
        murecho: ["Murecho", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-balance": {
          "text-wrap": "balance",
        },
        ".testing": {
          border: "solid 2px red",
        },
      });
    },
  ],
};
