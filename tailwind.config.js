const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
      serif: ['"IBM Plex Serif"', ...defaultTheme.fontFamily.serif],
      mono: ['"IBM Plex Mono"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      fontFamily: {
        'sans-narrow': [
          '"IBM Plex Sans Condensed"',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
