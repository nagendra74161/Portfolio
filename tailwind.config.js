/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(0,0,0,0.18)',
      },
      colors: {
        bg: '#0b1220',
        surface: '#111827',
        accent: '#22c55e',
        accentSoft: '#34d399',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
