module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "10rem",
      },
    },
    extend: {
      maxWidth: {
        "1/3": "33.3%",
      },
      fontFamily: {
        sans: ["DM sans", "sans-serif"],
        body: ["DM sans", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover"],
      borderOpacity: ["hover", "active"],
      textDecoration: ["hover"],
      background: ["hover", "active"],
    },
  },
  plugins: [],
};
