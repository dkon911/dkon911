/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Enable manual dark mode toggling
  theme: {
    extend: {
      colors: {
        'neo-white': 'rgb(var(--neo-white) / <alpha-value>)',
        'neo-black': 'rgb(var(--neo-black) / <alpha-value>)',
        'neo-cyan': '#00CC88',
        'neo-magenta': '#5548E0',
        'neo-yellow': '#FF4D00',
        'neo-bg': 'rgb(var(--neo-bg) / <alpha-value>)',
        'neo-text': 'rgb(var(--neo-text) / <alpha-value>)',
        'neo-border': 'rgb(var(--neo-border) / <alpha-value>)',
      },
      boxShadow: {
        'hard': '4px 4px 0px 0px rgb(var(--neo-shadow))',
        'hard-sm': '2px 2px 0px 0px rgb(var(--neo-shadow))',
        'hard-xl': '8px 8px 0px 0px rgb(var(--neo-shadow))',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'body': ['"Inter"', 'sans-serif'],
        'mono': ['"Space Mono"', 'monospace'],
      },
      cursor: {
        'none': 'none',
      }
    },
  },
  plugins: [],
}

