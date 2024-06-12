/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        LighterBeige: "#F9F1E7",
        LightBeige: "#FAF3EA",
        Beige: "#FFF3E3",
        Golden: "#B88E2F",
        TitlesColor: "#333333",
        TextColor:"#666666",
      },
    },
  },
  plugins: [],
}

