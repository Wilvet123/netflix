/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white': '#FFFFFF',
      'midGray': '6D6D6E',
      'gray': '#808080',
      'red': '#89090B',
      'black': '#141414',
      'blue': '#00CED1',
    },
    screens: {
      'sm': '375px',
      'md': '540px',
      'lg' : '800px',
      'xl': '1024px',
     
    },
    extend: {},
  },
  plugins: [],
}

