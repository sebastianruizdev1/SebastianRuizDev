/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        tron: {
          background: '#000000',
          accent: '#00ffff',
          text: '#ffffff',
          darkBlue: '#193f4a',
          darkCyan: '#2f8ca3',
        },
      },
    },
  },
  plugins: [],
};
