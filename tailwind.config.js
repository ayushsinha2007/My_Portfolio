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
        arc: {
          void: '#030712',
          navy: '#060b14',
          deep: '#0a1120',
          panel: '#0d192e',
          card: '#101e38',
          border: 'rgba(56, 189, 248, 0.15)',
          'border-active': 'rgba(0, 240, 255, 0.4)',
          cyan: '#00f0ff',
          'cyan-glow': 'rgba(0, 240, 255, 0.25)',
          water: '#0284c7',
          'water-light': '#38bdf8',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          ember: '#f97316',
          'ember-glow': 'rgba(249, 115, 22, 0.3)',
          flame: '#ff4400',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        japanese: ['"Noto Sans JP"', '"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'water-flow': 'waterFlow 12s ease-in-out infinite',
        'water-wave': 'waterWave 8s ease-in-out infinite',
        'ember-float': 'emberFloat 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scanline': 'scanline 6s linear infinite',
        'radar-spin': 'radarSpin 10s linear infinite',
      },
      keyframes: {
        waterFlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        waterWave: {
          '0%': { transform: 'translateX(0) translateZ(0) scaleY(1)' },
          '50%': { transform: 'translateX(-25%) translateZ(0) scaleY(1.08)' },
          '100%': { transform: 'translateX(-50%) translateZ(0) scaleY(1)' },
        },
        emberFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-16px) scale(1.15)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(0,240,255,0.3))' },
          '50%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(0,240,255,0.7))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radarSpin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        }
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at 50% 30%, rgba(14, 165, 233, 0.12) 0%, rgba(6, 11, 20, 0.95) 75%, #030712 100%)',
        'cyber-grid': 'linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
