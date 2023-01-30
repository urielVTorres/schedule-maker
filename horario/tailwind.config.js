/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
        fontFamily: {
            'Raleway': 'Raleway',
            "Monserrat": "Montserrat Alternates",
            "Rajdhani": "Rajdhani"
        }
    },
  },
  plugins: [],
}
