module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "12xl": "12rem",
        "15xl": "15rem",
        "20xl": "20rem",
      },
      inset: {
        "5/100": "5%",
        "7/100": "7%",
        "1/10": "10%",
        "12/100": "12%",
        "14/100": "14%",
        "1/6": "16.666667%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "5/6": "83.333333%",
        "85/100": "85%",
        "87/100": "87%",
        "11/12": "91.666667%",
      },
      spacing: {
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
        180: "44rem",
      },
      scale: {
        165: "1.65",
        170: "1.70",
        175: "1.75",
        200: "2",
      },
      keyframes: {
        out: {
          "0%": { opacity: 0, display: "hidden" },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        out: "out .3s linear",
        in: "out .3s linear reverse",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
};
