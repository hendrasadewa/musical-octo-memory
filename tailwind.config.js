/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        brittany: ['BrittanySignature', 'cursive']
      },
      colors: {
        brandDark: '#c9a36f',
        brandLight: '#c5a566',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      backgroundImage: {
        leaves: "url('/assets/images/leaves.png')",
        flower: "url('/assets/images/flower.png')",
        'flower-circle': "url('/assets/images/flower-circle.png')",
      },
    },
  },
  plugins: [require('daisyui')],
};
