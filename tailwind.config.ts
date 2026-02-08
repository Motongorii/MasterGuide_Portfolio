import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5f0',
          100: '#f5ebe2',
          200: '#e8d4c4',
          300: '#dabda6',
          400: '#cda688',
          500: '#c09f88',
          600: '#b8957f',
          700: '#a0815c',
          800: '#886d51',
          900: '#6f5a46',
          950: '#3d3226',
        },
        secondary: {
          50: '#f0f5ff',
          100: '#e1ebff',
          200: '#c2d7ff',
          300: '#a3c3ff',
          400: '#84afff',
          500: '#5a8fd9',
          600: '#4068b3',
          700: '#2d508d',
          800: '#1a3867',
          900: '#071f41',
          950: '#051a34',
        },
        accent: {
          50: '#fffbf0',
          100: '#fff7e6',
          200: '#ffedcc',
          300: '#ffe3b3',
          400: '#ffd999',
          500: '#ffcf80',
          600: '#f5bf66',
          700: '#e6a84d',
          800: '#d99233',
          900: '#cc7c1a',
          950: '#804d00',
        },
        sage: {
          50: '#f5faf8',
          100: '#ebf5f1',
          200: '#d7ebe3',
          300: '#c2e1d5',
          400: '#add7c7',
          500: '#98cdb9',
          600: '#7bc3ab',
          700: '#5eb99d',
          800: '#41af8f',
          900: '#2a9e7f',
          950: '#1a5c4d',
        },
        dark: '#1a1a1a',
        light: '#fafaf9',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
export default config
