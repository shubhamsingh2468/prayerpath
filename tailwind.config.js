/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#3A5244",
        ivory: "#F9F7F2",
        tan: "#C5B18D",
        sage: "#A8B5A3",
        charcoal: "#333333",
      },
      borderRadius: {
        'soft': '30px',
      },
    },
  },
  plugins: [],
}
