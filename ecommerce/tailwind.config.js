/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1E22832',
        "primaryBG":'#939c8033'

      },
      fontFamily:{
'primary':[ "Roboto", 'sans-serif']
      },
    },
  },
  plugins: [],
}