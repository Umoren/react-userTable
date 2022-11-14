/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-blue': '#354069',
        'light-blue': '#39628D',
        'green-light': '#6AB8B8',
        'green-lighter': '#979797',
        'white': '#FFFFFF',
        'dark': '#22242A',
        'light-purple': '#8A98CA',
        'orange': '#F2AC57',
        'white-variant': '#F8F9FB',
        'gray-dark': '#979797',
        'gray-lighter': '#DADADA',
        'gray': '#D8D8D8',
        'gray-light': '#E2E2E2',
        'deep-gray': '#808080',
        'sky-blue': '#99D9D9',
        'grey-100': '#CACACA',
      },
      theme: {
        screens: {
          lg: '976px',
          xl: '1440px',
        },

        extend: {
          spacing: {
            '128': '32rem',
            '144': '36rem',
          },
        }
      }
    },
  },


}