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
        texto: '#6b6375',
        mostaza: '#ffce1b',
        menta: '#98FF98',
        fondo2:  '#fffbf2',
        bgWhite: '#ffffff',
        bgCard: '#f9f9f9',
        bgSecond: '#f0f0f0',
        textH: '#08060d',
        error: '#c70c0c',
      },
    },
  },
  plugins: [],
}