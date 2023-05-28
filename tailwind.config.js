/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        blue: {
          default: '#315EFF'
        },
        black: {
          default: "#1a1a1a"
        }
      },
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    },
    
  },
  plugins: [],
}

