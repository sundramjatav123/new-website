module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',
        accent: '#00E5FF'
      },
      backgroundImage: {
        'grid-light': 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px)',
        'grid-dark': 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 99, 255, 0.4)'
      }
    }
  },
  plugins: []
};
