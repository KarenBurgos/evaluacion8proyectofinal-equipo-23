module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'monserrat': ['Montserrat', 'san-serif'],
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#E48F72',
      'primary-dark': '#DE7450',
      'secondary': '#F9DFD5',
      'danger': '#e3342f',
     }),
     backgroundImage: {
      'hero-pattern': "url('../src/assets/img/prueba.jpg')",
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};