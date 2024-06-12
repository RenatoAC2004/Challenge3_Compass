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
        CardTitleColor: "#3A3A3A",
        CardTextColor: "#898989",
        CardBackground: "#F4F5F7",
        DiscountTag: "#E97171",
        NewTag: "#2EC1AC",
        FooterLightGray: "#9F9F9F",
      },
    },
  },
  plugins: [],
}

