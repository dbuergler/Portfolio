/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      "2xl": "1440px",
      "3xl": "1920px",
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['30px', '35px'],
      xl: ['68px', '80px'],
    },
    
    extend: {
      colors: {
        primary: "#4361EE",
        secondary: "#3D3D3D",
        accent: "FCFCFC",
      },
      backgroundImage: {
        hero: "url('/src/assets/background.jpg')",
      },
      fontFamily: {
        notoSans: ["Noto Sans", "serif", "sans-serif", ],
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 3s ease-out'
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}