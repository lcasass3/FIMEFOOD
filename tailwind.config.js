/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(68, 165, 112, 1)',
        secondary: 'rgba(72, 195, 128, 0.6)',
        font: 'rgba(47, 146, 92, 1)'
      }
    },
  },
  plugins: [],
}

