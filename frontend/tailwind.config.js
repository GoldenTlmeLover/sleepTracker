/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}",
            "./views/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito', 'sans-serif1']
      }
    },
  },
  plugins: [],
}