/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '9/16': '9 / 16',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '5/4': '5 / 4',
        '4/5': '4 / 5',
      },
    },
  },
  plugins: [],
}

