/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      colors: {
        ink: {
          950: '#070b16',
          900: '#0d1424',
          800: '#1a2440'
        },
        ocean: {
          500: '#34c8ff',
          600: '#16a9e0'
        },
        mint: {
          500: '#3be2b4',
          600: '#26c59b'
        }
      },
      boxShadow: {
        panel: '0 20px 40px rgba(5, 12, 25, 0.35)'
      }
    }
  },
  plugins: []
};
