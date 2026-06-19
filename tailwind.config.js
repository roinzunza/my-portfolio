/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tokens used by the TCG Maker editor (src/maker/).
        ink: "#08090d",
        panel: "#0f1117",
        panel2: "#161922",
        panel3: "#1c1f2b",
        line: "#252938",
        lineSoft: "#1d212d",
        muted: "#727a8d",
        mutedSoft: "#5a6376",
        text: "#e9eaf0",
        textSoft: "#b6bbcc",
        brand: "#f5d65a",
        brand2: "#c9971a",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-4px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        "fade-in": "fadeIn 0.15s ease-out",
        "slide-down": "slideDown 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
