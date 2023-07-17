/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
      '10': 'repeat(10, minmax(0, 1fr))',
      '20': 'repeat(20, minmax(0, 1fr))',
      },
      colors:{
        'boho':{
          1:'#F8ECD9',
          2:'#D49F78',
          3:'#F2DBC9',
          4:'#BFAC84',
          5:'#C4C0B4',
          6:'#D9C89C',
          7:'#9A8C6F',
          8:'#B07B5C',
          9:'#C2914C',
          10:'#7F6E5D',
          11:'#D6A48B',
          12:'#D5916A',
          13:'#E4D8C8',
          14:'#B16B47',
          15:'#A1ADA7',
          16:'#848370'
        }
      }
    },
  },
  plugins: [],
}
