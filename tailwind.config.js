/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
           'bg-light':'#F7F7F8',
           'bg-dark':'#444654',
           'gray':'#E0E0E0',
           'highlight':'#0DA67B'
        }
    },
  },
  plugins: [],
}
