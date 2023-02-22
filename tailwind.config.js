/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
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
