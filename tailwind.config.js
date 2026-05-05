/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0A0A0A',
        brand: {
          blue: '#0033CC',
          'blue-dark': '#001F7A',
          'blue-light': '#E6ECFF',
          yellow: '#FFD60A',
          'yellow-dark': '#E5C100',
        },
      },
    },
  },
  plugins: [],
}
