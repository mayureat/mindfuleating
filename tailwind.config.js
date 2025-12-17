/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#46ec13',
        background: {
          light: '#f6f8f6',
          dark: '#142210',
        },
        surface: {
          light: '#ffffff',
          dark: '#1e2b19',
        },
        moss: {
          100: '#e5eee3',
          200: '#cfdcc9',
          300: '#a3b99d',
          400: '#5f7a58',
          500: '#2c3928',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 30px 60px -30px rgba(20, 34, 16, 0.35)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(70, 236, 19, 0.2) 1px, transparent 0)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
