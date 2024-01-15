/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily:{
        mullish: ["Mulish", "sans-serif"],
      },

      colors:{
        deepB1ue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300:"#4b94ed",
        lightB1ue500:"#0b72e7" ,
        greenLight: "#61cea6" ,
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c" ,
        deepBlueHead: "#162f56",
        gray2:"#525a76",
    },
    backgroundImage: {
      'below-hero-img': "url('img/hero-triangular-img.svg')",
    },
  },
  },
  plugins: [],
}

