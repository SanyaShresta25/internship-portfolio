export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glow-yellow': '#FCFFC1',
        'glow-gold': '#FFE893',
        'glow-coral': '#FBB4A5',
        'glow-pink': '#FB9EC6',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(252, 255, 193, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(252, 255, 193, 0.8)' },
        }
      }
    },
  },
  plugins: [
  require('@tailwindcss/line-clamp'),
],

}