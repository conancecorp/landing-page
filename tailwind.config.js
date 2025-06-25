/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées Conance
        primary: {
          50: '#f0fffe',
          100: '#ccfff9',
          200: '#99fff3',
          300: '#66ffed',
          400: '#33ffc2', // #33FFC2
          500: '#23b086', // #23B086
          600: '#1e9672',
          700: '#1a7d5e',
          800: '#15634a',
          900: '#0f2f2c', // #0F2F2C
          950: '#08211f'
        },
        neutral: {
          50: '#ffffff',  // #FFFFFF
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a0a0a0',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#000000'  // #000000
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
} 