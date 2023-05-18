/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      textUnderlineOffset: {
        9: "17px",
      },
      fontFamily: {
        "space-grotesk": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        custom: {
          primary: "#D9D9D9",
          secondary: "#242424",
          background: "#151515",
          accent: "#4EE1A0",
          foreground: "#FFFFFF",
          alert: "#FF6F5B",
        },
      },
    },
  },
  plugins: [],
};
