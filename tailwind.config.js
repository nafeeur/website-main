/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  safelist: [
    '!duration-0',
    '!delay-0',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],

  content: {
    transform: (content) => content.replace(/taos:/g, ''),
  },
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
        'nord-gray':"#EBEFF5",
        'tip':'#E75E62',
        'discord':'#5460E6',
        'python':'#336D9D',
        'wolf':'#DD1101',
        'nasa': '#D62127',
        'twilio':'#E82E44',
        'tran':'#4884E9',
        'ios':'#3F3F3F',
        'news':'#22408C',
        'mes':'#29C743',
        'ai':'#532D5B',
        'chirper':'#1893EF',
        'sb':'#505667',
        'tail':'#10A5E9',  
        'tailp':'#E34593',
        'tailcard':'#1F293B',
        'twitter':'#1C93E4',
        'swift': '#E44D35',
        'xcode':'#1D6FD6',
        'coco':'#E23120',
        'react':'#5CCFEE',
        'js':'#F2D401',
        'css':'#1F8EE7',
        'yelp':'#BA1200',
        'map':'#309F4F'
            },

    },




  },
  plugins: [
    require('tailwindcss-hero-patterns'),
    require('tailwindcss-animated'),
    require('taos/plugin'),
    require('tailwind-typewriter')({
        wordsets: {
            hello: {
                words: ['Hello World...', 'হ্যালো বিশ্ব...', 'Hallo Welt...', '	こんにちは世界...', '	Привет мир...'],
                delay: 1
            }
        }
    })
  ],


}
