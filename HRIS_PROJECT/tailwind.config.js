/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './templates/**/*.html',
      './node_modules/flowbite/**/*.js',

  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}",'./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }