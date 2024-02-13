/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-pruple": "#783F8E",
      },
      boxShadow: {
        "inset-custom": "inset 0 0 0 2000px rgba(0, 0, 0, 0.60)",
      },
      backgroundImage: {
        "landing-page": "url('./assets/Landing.svg')"
      },
      screens: {
        "xl": {'min': '1290px'}
      },
      animation: {
        "fade-in": "fadeIn 2s ease forwards",
        "fade-out": "fadeOut 2s ease forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}

