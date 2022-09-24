/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
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
