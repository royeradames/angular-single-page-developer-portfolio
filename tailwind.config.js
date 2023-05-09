/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        9: '17px',
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        custom: {
          black: "#151515",
          "dark-grey": "#242424",
          green: "#4EE1A0",
          grey: "#D9D9D9",
          white: "#FFFFFF",
          red: "#FF6F5B",
        },
      },
    },
  },
  plugins: [],
};
