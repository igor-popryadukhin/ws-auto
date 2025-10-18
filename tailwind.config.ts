import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.{vue,js,ts}',
    './app/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC2626',
        dark: {
          900: '#111111',
          800: '#1A1A1A',
          700: '#1F1F1F',
        },
        light: {
          100: '#F5F5F5',
          200: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['"Montserrat"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 25px 50px -12px rgba(0,0,0,0.25)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out both',
      },
    },
  },
  plugins: [typography],
} satisfies Config
