/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {

    fontFamily: {
      sans: "Nunito Sans , sans-serif"
    },

    extend: {
      colors: {
        transparent: 'transparent',

        white: "#fff",
        black: "000",

        gray: {
          100: "#dfdfdf",
          200: "#c6c6c6",
          700: "#1b1c29",
          900: "#12131b",
        },

        red: "#ff4040",
        orange: "#fba931",
      },


    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
