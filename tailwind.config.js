/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2D4F36", // Sage Green (Dark)
        background: "#F9F7F2", // Cream/Ivory
        accent: "#A8B5A3", // Soft Sage
        tan: "#C5B18D", // Earth tone for path
        muted: "rgba(45, 79, 54, 0.5)",
        surface: "#FFFFFF",
      },
      fontFamily: {
        serif: ["PlayfairDisplay_400Regular", "serif"],
        sans: ["Inter_400Regular", "sans-serif"],
        "sans-bold": ["Inter_700Bold", "sans-serif"],
        "serif-bold": ["PlayfairDisplay_700Bold", "serif"],
      },
      borderRadius: {
        'soft': '20px',
      },
    },
  },
  plugins: [],
}
