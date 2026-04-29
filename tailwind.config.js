/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: '#0f0d0b',
        bg2: '#161310',
        surf: '#1e1a15',
        surf2: '#262018',
        accent: '#c8a96e',
        'accent-l': '#d9bc87',
        gold: '#c8a96e',
      },
    },
  },
  plugins: [],
};
