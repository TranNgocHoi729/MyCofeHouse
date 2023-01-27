/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'light-coffe':'#af5b2f'
      },
      fontFamily:{
        GlobalFont:['Dancing Script','cursive']
      }
    },
  },
  plugins: [],
}
