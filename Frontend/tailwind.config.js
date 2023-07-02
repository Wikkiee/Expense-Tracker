/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-black': '#121212',
        'black':'#191818',
        'light-black':'#242424',
      },
      textColor:{
        'light-black':'#B3B3B3'
      }
    },
  },
  plugins: [],
};
