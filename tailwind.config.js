/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#0c2e8a',
        secondary: "#50D8AF",
      }
    },
    backgroundImage: {
      "carousel" : "url('/src/image/carousel/1.jpg')",
    },
  },
  plugins: [],
}
