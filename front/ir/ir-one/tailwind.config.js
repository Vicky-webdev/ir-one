/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust to match your structure
  ],
  darkMode: 'class', // Enables toggling dark mode via 'dark' class

  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        slideUp: 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },

      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#6b7280', // gray-500
        danger: '#dc2626', // red-600
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
