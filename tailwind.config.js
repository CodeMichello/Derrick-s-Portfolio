/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        dark: "#030304",
        yellowish: "#FFFF00",
        gray: " #999999",
      },

      fontFamily: {
        poppins: "'poppins', sans-serif",
      },
    },
  },
  plugins: [],
};
