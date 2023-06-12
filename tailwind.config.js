/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#E9E9E9',
        200: '#979797',
        500: '#6B6B6B',
        700: '#4d4d4d',
        900: '#343434',
      },
      yellow: {
        200: '#D2C373',
        500: '#CBAC08',
        900: '#867101',
      },
      purple: {
        100: '#C3A9CC',
        200: '#A280AD',
        300: '#dbd3de',
        500: '#946AA3',
        700: '#755F7D',
        800: '#29212c',
        900: '#460A5B',
      },
    },
    fontFamily: {
      major: ['Major Mono Display', 'monospace'],
      murecho: ['Murecho', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}

