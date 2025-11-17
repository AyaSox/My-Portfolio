/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lighter navy color scheme
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155', // New card background
          800: '#1e293b', // New main background
          900: '#0f172a',
          950: '#020617',
        },
        // New accent color from your screenshot
        electric: {
          100: '#e0f2fe', // Very light for light mode backgrounds
          200: '#bae6fd', // Light for light mode hover states
          300: '#7dd3fc', // Medium light for borders
          400: '#38bdf8', // Lighter for text
          500: '#0ea5e9', // Main accent
          600: '#0284c7', // Hover
          700: '#0369a1', // Darker for better contrast in light mode
        },
        // New gold color for borders
        gold: {
          300: '#fde68a', // Lighter accent for hover
          500: '#facc15', // Main gold color
          700: '#b45309', // Darker gold for depth
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
