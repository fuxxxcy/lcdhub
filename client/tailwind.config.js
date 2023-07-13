/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './src/AppRoutes.tsx',
  ],
  theme: {
    colors: {
      "primarly": "#7CD2B0",
      "background": "#1A1A25",
      "accent": "#000000",
      "text-color": "#FFFFFF",
    },
    extend: {},
  },
  plugins: [],
}

