/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      rubik: [
        "Rubik",
        "Open sans",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
      ],
    },
    extend: {
      colors: {
        appRed: {
          500: "#ef6b74",
          100: "#fededb",
        },
        appPurple: {
          200: "#7475d6",
          300: "#5a7fdb",
          400: "#9d68cf",
          500: "#4a43b1",
          700: "#5a3281",
        },
      },
    },
  },
  plugins: [],
};
