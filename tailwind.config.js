module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cardTitle: "#4b4b4b",
        cardDark: "#323232",
        canvas: "#e0e0e0",
        canvasDark: "#222222"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")
  ],
}
