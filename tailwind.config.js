/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'transparent': 'transparent',
      'black': '#000000',
      'primary-100': '#FCFCFC',
      'primary-200': '#E9E9F0',
      'primary-300': '#DCDCE4',
      'primary-400': '#BBBBCE',
      'primary-500': '#A0A0B0',
      'primary-600': '#7A7A8D',
      'primary-700': '#5C5C73',
      'primary-800': '#434352',
      'primary-900': '#30303C',
      'brand-red': '#ED1C24',
      'disabled-button': '#F4A5A8',
      'primary-green': '#14CB04',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}

