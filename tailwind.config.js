/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'light-coffe':'#C89F94'
      },
      fontFamily:{
        GlobalFont:['Dancing Script','cursive']
      }
    },
  },
  plugins: [],
}
