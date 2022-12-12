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
          50: "#fff9fb",
          100: "#fededb",
          400: "#ed7b83",
          500: "#ef6b74",
        },
        appPurple: {
          50: "#f9faff",
          300: "#9d68cf",
          600: "#5a3281",
        },
        appIndigo: {
          200: "#5a7fdb",
          300: "#7475d6",
          500: "#4a43b1",
        },
      },
    },
  },
  plugins: [],
};
