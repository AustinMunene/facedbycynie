/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Josefin Sans', 'Helvetica', 'Arial', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'accent': ['Great Vibes', 'cursive'],
        'script': ['Great Vibes', 'cursive'],
      },
      colors: {
        blush: {
          50: '#fef7f8',
          100: '#fde8ed',
          200: '#fbd1dc',
          300: '#f7a8bc',
          400: '#f17a98',
          500: '#e5507a',
          600: '#c4617a',
          700: '#a84e66',
          800: '#8c3f55',
          900: '#6b2f42',
        },
        rose: {
          50: '#fdf6f7',
          100: '#fae8eb',
          200: '#f5d0d7',
          300: '#eeb0bc',
          400: '#e08a9a',
          500: '#d16880',
          600: '#b44d66',
          700: '#973d54',
          800: '#7d3347',
          900: '#6a2d3d',
        },
        cream: {
          50: '#fbf6f0',
          100: '#fef9f5',
          200: '#fdf3ed',
          300: '#fbe8de',
          400: '#f7d6c5',
          500: '#f0bea8',
        },
        warmgray: {
          50: '#faf9f8',
          100: '#f5f3f1',
          200: '#ebe7e3',
          300: '#d8d1cb',
          400: '#b8ada4',
          500: '#9a8d83',
          600: '#7d706a',
          700: '#5e5450',
          800: '#3d3533',
          900: '#171315',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
      animation: {
        'fade-in': 'fadeIn 600ms var(--ease-out) forwards',
        'slide-up': 'slideUp 700ms var(--ease-out) forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
