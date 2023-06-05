/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        light: {
          primary: "#242424",
          secondary: "#D9D9D9",
          background: "#FFFFFF",
          accent: "#4EE1A0",
          foreground: "#151515",
          alert: "#FF6F5B",
        },
        dark: {
          primary: "#4685ff",
          secondary: "#ffffff",
          background: "#f9f0eb",
          accent: "#ffb084",
          foreground: "#201009",
          alert: "#FF6F5B",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },
  plugins: [],
};
