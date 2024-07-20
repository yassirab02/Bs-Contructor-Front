/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      brightness: {
        30: '0.3', // 30% brightness
      },
      translate: {
        '-1/2': '-50%',
      },
    },
  },
  plugins: [],
}