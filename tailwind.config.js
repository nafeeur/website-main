/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
    

      'animation': {
        'text':'text 4s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%, 100%': {
               'background-size':'200% 200%',
                'background-position': 'left center'
            },
            '50%': {
               'background-size':'200% 200%',
                'background-position': 'right center'
            }
        },
    },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purp':"#6B6EF1",
        'nord-black-1': '#102035',
        'nord-black-3': '#101827',
        'nord-black-2': '#0F172A',
        'nord-white-3': '#0F172A',
        'frost-blue': '#4A79EF',
        'frost-light-blue': '#2E8EEC',
        'nord-white-1': '#eceff4',
        'nord-teal':"#88c0d0",
        'tail-pastel':"#6466F1",
        'github':"#FF6347",
        'linkedin':'#1D90FF',
        'email':'#3BB371',
        'card':"#F8FAFC",
        'gry':"#F8FAFC",
        'red':"#F44336",
        'dark-1':'#0F172A',
        'dark-2':'#122238',
        'dark-3':'#18324E',
        'hafsa-gray':'#D1D5DB',
        'hafsa-dark':"#101827",
        'hafsa-gray-2':'#D1D5DB',
        'nord-gray':"#EBEFF5"
        
            },

    },

  },
  
  plugins: [require('tailwindcss-hero-patterns'),],
}
