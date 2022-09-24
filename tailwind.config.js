/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slack': '#1a1d21',
      }
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
      })
    }
  ],
};
