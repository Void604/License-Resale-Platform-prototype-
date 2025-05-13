/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E5F0FF',
          100: '#B8D4FF',
          200: '#85B3FF',
          300: '#5691FF',
          400: '#2E6FFF',
          500: '#0047FF',
          600: '#0036CC',
          700: '#002699',
          800: '#001866',
          900: '#000C33',
          950: '#000619',
        },
        secondary: {
          50: '#ECFEFF',
          100: '#CEFBFF',
          200: '#9DF5FF',
          300: '#6CEFFF',
          400: '#3BE9FF',
          500: '#00D5F0',
          600: '#00A7BD',
          700: '#007D8A',
          800: '#005257',
          900: '#002A2D',
          950: '#001516',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 71, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 71, 255, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};