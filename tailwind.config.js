/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellows': '#FBFF42',
        'blues': '#9BE8D8',
        'first': '#f6f6f6',
        'second': '#eceff1',
        
      },
    
    },
  },
  plugins: [],
}