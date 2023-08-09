/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      primary: colors.red-500,
      secondary: colors.yellow,
      neutral: colors.gray,
    }
  }
}