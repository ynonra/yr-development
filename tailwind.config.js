/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'appRed': {
          500: "#E87F75",
        },
        'appPurple': {
          500: "#99ADF9",
        },
      },
    },
  },
  plugins: [],
};
