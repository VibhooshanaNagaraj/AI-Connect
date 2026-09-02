/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#08070A",
          surface: "#10090D",
          card: "#140C11",
          hover: "#1A1016",
          border: "#292126",
          muted: "#181216",
        },
        deep: {
          red: "#3A0D14",
          "red-muted": "#2A090E",
        },
        brand: {
          red: "#FF2638",
          "red-bright": "#FF4050",
          "red-dark": "#D61A2B",
          "red-glow": "rgba(255, 38, 56, 0.25)",
        },
        secondary: {
          text: "#A7A3A5",
          muted: "#6B666A",
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'red-hero-glow': 'radial-gradient(circle at 50% 30%, rgba(58, 13, 20, 0.65) 0%, rgba(8, 7, 10, 0) 70%)',
        'red-cta-glow': 'radial-gradient(circle at 50% 50%, rgba(255, 38, 56, 0.15) 0%, rgba(8, 7, 10, 0) 75%)',
        'card-gradient': 'linear-gradient(180deg, rgba(20, 12, 17, 0.9) 0%, rgba(16, 9, 13, 0.95) 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 30px -5px rgba(255, 38, 56, 0.35)',
        'red-glow-lg': '0 0 50px -10px rgba(255, 38, 56, 0.5)',
        'red-node': '0 0 12px 2px rgba(255, 38, 56, 0.8)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
