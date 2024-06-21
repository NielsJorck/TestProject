import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontFamily: {
        'sans': ['"Recursive"', {
          fontVariationSettings: '"MONO" 0, "CRSV" 0, "CASL" 0',
      }, "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        'serif': ['"Recursive"', {
          fontVariationSettings: '"MONO" 0, "CRSV" 0, "CASL" 0',
      }, "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        'mono': ['"Recursive"', {
          fontVariationSettings: '"MONO" 1, "CRSV" 1, "CASL" 0',
      }, "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
    },
    extend: {
      colors: {
        primary: colors.sky
      },
    }
  },
  plugins: [typography]
}