/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mc: {
          grass: '#5D8A3A',
          dirt: '#8B5A2B',
          stone: '#8E8E8E',
          diamond: '#5DD5E0',
          redstone: '#B02E26',
          obsidian: '#1B1B2E',
          sand: '#F5F0E1',
          gold: '#E5B80B',
          'slot-dark': '#262638',
          'slot-dark-border': '#3D3D56',
          'slot-light': '#EAE4D3',
          'slot-light-border': '#D5CDB5',
        }
      },
      fontFamily: {
        pixel: ["'Press Start 2P'", "monospace"],
        vt323: ["'VT323'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
}