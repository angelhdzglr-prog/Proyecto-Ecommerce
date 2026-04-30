/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: '#f5f5f5',
        primary: '#006064',
        primaryHover: '#005255',
        primaryLight: '#0096aa',
        accent: '#ec5840',
        accentHover: '#d8432e',
        texto: '#2d2d2d',
        mostaza: '#ffce1b',
        menta: '#98FF98',
        fondo2:  '#fffbf2',
      },
    },
  },
  plugins: [],
}