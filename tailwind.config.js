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
          primary: "#201009AA",
          secondary: "#ffffff",
          accent: "#4685ff",
          foreground: "#171d26",
          background: "#f9f0eb",
          alert: "#FF6F5B",
        },
        dark: {
          primary: "#D9D9D9",
          secondary: "#242424",
          accent: "#4EE1A0",
          background: "#151515",
          foreground: "#FFFFFF",
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
