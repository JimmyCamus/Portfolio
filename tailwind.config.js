/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#6DD5ED",
      secondary: "#CC2B5E",
      "primary-gradient": "#2193B0",
      "secondary-gradient": "#753A88",
      white: "#FFFFFF",
      black: "#111111",
      "neutral-content": "#666666",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
