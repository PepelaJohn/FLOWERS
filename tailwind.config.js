/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E72463",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      boxShadow: {
        "3xl": " 0px 1px 5px 0px rgba(0, 0, 0, 0.2)",
        "4xl": "0 5px 11px rgba(0, 0, 0, 0.14)",
      },

      screens: {
        xxs: "340px",
        xs: "540px",
        sm: "768px",
        md: "1060px",
        l: "1260px",
        ml: "1640px",
        xl: "1920px",
      },
    },
  },
  plugins: [],
};
