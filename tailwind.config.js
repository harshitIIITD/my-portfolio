/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        gray: {
          200: '#e5e7eb',
          300: '#d1d5db',
          500: '#6b7280',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        dark: {
          bg: '#121212',
          text: '#e0e0e0',
        },
        accent: '#ff4081',
        green: {
          200: '#86efac',
          300: '#bbf7d0',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      fontSize: {
        'fluid-h1': 'var(--fluid-h1)',
        'fluid-h2': 'var(--fluid-h2)',
        'fluid-h3': 'var(--fluid-h3)',
        'fluid-h4': 'var(--fluid-h4)',
        'fluid-base': 'clamp(1rem, 2vw, 1.25rem)',
        'fluid-body': 'var(--fluid-body)',
        'fluid-small': 'var(--fluid-small)',
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      }
    },
  },
  plugins: [],
}
