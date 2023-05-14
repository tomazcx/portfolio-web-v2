/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          default: '#315EFF'
        }
      },
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
    
  },
  plugins: [],
}

