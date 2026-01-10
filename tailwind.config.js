/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          black: '#0a0a0a',
          dark: '#121212',
          charcoal: '#1a1a1a',
          silver: '#e5e5e5',
          gold: '#d4af37',
          dim: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}