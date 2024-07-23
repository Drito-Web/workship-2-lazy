module.exports = {
  content:[
    "./src/**/*.{html,js.jsx,ts.tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        customColor: '',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
