/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 30px -4px rgba(0, 0, 0, 0.08)',
        'soft-xl': '0 12px 40px -6px rgba(0, 0, 0, 0.12)',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        gray: {
          850: '#151b23',
          900: '#0d1117',
          950: '#010409',
        }
      }
    },
  },
  plugins: [],
};
