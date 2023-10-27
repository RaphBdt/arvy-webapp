/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#833BF9',
        'customGray': '#F6F6F6'
      },
      fontFamily: {
        body: ['Inter']
      }
    },
  },
  plugins: [],
}