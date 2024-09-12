/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6347f9",
        light: "#ffffff1a",
        gray: "#9da1b4",
        lightGray: "#f4f6fa",
        orange: "#fa9556",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
};
