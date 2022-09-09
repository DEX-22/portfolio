/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    color:{
      'my-white':'#F5F5F5',
      'my-light-blue':'#C9D8F0',
      'my-blue':'#4A6087',
      'my-black':'#1D1D25'
    },
    extend: {},
  },
  plugins: [],
}