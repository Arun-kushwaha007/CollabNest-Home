module.exports = {
  darkMode: 'class', // <-- important!
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1A202C',
        accent: '#38bdf8', // updated accent color
      },
    },
  },
  plugins: [],
}