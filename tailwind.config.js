/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#0D1117',
        landingPage: '#070708',
      }
    },
  },
  variants: {},
  plugins: [],
}