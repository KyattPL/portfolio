/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira-code': ['"Fira Code"', 'monospace'],
        'courier-prime': ['"Courier Prime"', 'monospace'],
      },
    },
  },
  plugins: [],
}

