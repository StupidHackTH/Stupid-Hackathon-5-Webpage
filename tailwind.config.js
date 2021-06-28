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
        "stupid-blue": "#1b00ff",
        "stupid-green": "#06FF00",
        "stupid-yellow": "#EFE719",
        "stupid-pink": "#ff41a6",
        "stupid-violet": "#EB1FFE",
        "stupid-red": "#ff2600",
        "stupid-black": "#000"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
