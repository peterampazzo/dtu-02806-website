module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"],
        serif: ["Playfair Display"],
      },
      colors: {
        backgroud: "#FBF3DA",
        backgroud2: "#F9EDC8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
