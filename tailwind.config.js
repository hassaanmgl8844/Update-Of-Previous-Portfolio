/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'xs': '475px',
    },
    colors: {
      bgColor: "#0A192F",
      primaryColor: "#64FFDA",
      textColor: "#8892B0",
    }
  },
  plugins: [],
}