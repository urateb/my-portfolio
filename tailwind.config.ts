import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'eerie-black': '#191919',
        'bright-grey': '#EDEDED',
        'violet-blue': '#8083FF',
        'american-blue': '#464362',
        'bright-orange': '#EE6800',
        fuschia: '#FF00FF',
      },
    },
  },
  plugins: [],
}
export default config
