/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
    primary: '#006064',
    primaryHover: '#005255',
    primaryLight: '#0096aa',

    accent: '#ec5840',
    accentHover: '#d8432e',

    textBasic: '#6b6375',
    textHeading: '#08060d',

    bg: '#f5f5f5',
    bgSecond: '#f0f0f0',
    bgCard: '#f9f9f9',

    border: '#d8d8d8',

    golden: '#f59e0b',

    error: '#c70c0c',
    ligthGrey: '#f3f3f3',
	  darkGrey: '#6d6d6d',
	  grey: '#cccccc',
  },

    },
  },
  plugins: [],
}