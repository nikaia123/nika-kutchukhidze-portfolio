/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#080808',
        secondary: '#0d0d0d',
        accent: {
          DEFAULT: '#D4A843',
          hover: '#F5D98B',
        },
        text: {
          main: '#c8c8c8',
          muted: '#888888',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      }
    },
  },
  plugins: [],
}
