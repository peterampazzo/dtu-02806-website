module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans'],
        serif: ['Playfair Display'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
