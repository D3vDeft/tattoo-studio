module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0b0b0d',
        surface: '#0f1113',
        neon: '#00d07f',
        blood: '#ef4444',
        muted: '#9aa0a6'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Cinzel Decorative"', 'serif']
      }
    }
  },
  plugins: []
}
