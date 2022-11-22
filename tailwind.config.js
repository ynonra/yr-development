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
          500: "#E87F75",
          100: "#fededb",
        },
        appPurple: {
          500: "#99ADF9",
        },
      },
    },
  },
  plugins: [],
};
