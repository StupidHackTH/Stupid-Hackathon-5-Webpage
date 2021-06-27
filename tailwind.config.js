module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      fasys: ["FA Sysfont C"],
    },
    extend: {
      colors: {
        "stupid-green": "#06FF00",
        "stupid-yellow": "#EFE719",
        "stupid-pink": "#EB1FFE",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
