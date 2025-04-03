/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        softCream: "#F8F9FA", // Background
        charcoal: "#264653", // Headers, footer background, and text
        teal: "#2A9D8F", // Primary Buttons
        terracotta: "#E76F51", //Special promotions, sale tags
        sunshineYellow: "#E9C46A", //Highlights, secondary accents
        lightGray:"#515050" // paragraph texts
      }
    },
  },
  plugins: [],
}
