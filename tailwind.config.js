/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: "#22d3ee",
          cyan: "#67e8f9",
          purple: "#a78bfa"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(34,211,238,0.45)",
        innerglow: "inset 0 0 30px rgba(34,211,238,0.25)"
      },
      dropShadow: {
        neon: "0 0 30px rgba(103,232,249,0.9)"
      },
      keyframes: {
        slowspin: { to: { transform: "rotate(360deg)" } },
        mediumspin: { to: { transform: "rotate(-360deg)" } },
        fastspin: { to: { transform: "rotate(360deg)" } },
        floaty: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0px)" }
        },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 18px rgba(34,211,238,0.45)" },
          "50%": { boxShadow: "0 0 34px rgba(167,139,250,0.55)" }
        },
        hue: {
          "0%": { filter: "hue-rotate(0deg)" },
          "50%": { filter: "hue-rotate(40deg)" },
          "100%": { filter: "hue-rotate(0deg)" }
        },
        ripple: {
          "0%": { transform: "scale(0.9)", opacity: 0.6 },
          "100%": { transform: "scale(1.2)", opacity: 0 }
        }
      },
      animation: {
        slowspin: "slowspin 40s linear infinite",
        mediumspin: "mediumspin 24s linear infinite",
        fastspin: "fastspin 12s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 3s ease-in-out infinite",
        hue: "hue 10s linear infinite",
        ripple: "ripple 0.8s ease-out"
      }
    },
  },
  plugins: [],
}
