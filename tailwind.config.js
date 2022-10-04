const colours = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      primary: colours.indigo,
      accent: colours.cyan,
      slate: colours.slate,
      neutral: colours.zinc,
    },
    extend: {},
  },
  plugins: [],
};
