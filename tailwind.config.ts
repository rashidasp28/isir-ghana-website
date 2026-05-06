import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0066F5',
        primaryGreen: '#00B82E',
        darkNavy: '#062A4F',
        lightBlue: '#EEF6FF',
        lightGreen: '#ECFFF1',
        charcoal: '#1F2937',
        softGray: '#E5E7EB',
      },
    },
  },
  plugins: [],
}

export default config
