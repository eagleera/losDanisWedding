const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#A181A6',
      bone: '#F7EDE2',
      wedYellow: '#F6D294',
      orange: '#EBA57D',
      brown: '#BF8960',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      yellow: colors.yellow
    },
    extend: {
      fontFamily: {
        'sans': ['Bodoni Moda', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'leki': 'Leky Calgria'
      },
    },
  },
  plugins: [],
}
