/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{jsx,js,tsx,html}',
    './index.html',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

