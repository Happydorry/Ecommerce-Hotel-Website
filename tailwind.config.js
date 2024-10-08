/* eslint-disable no-dupe-keys */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#4CAF50",
        orange: {
          200: "#FED7AA",
          400: "#FB923C",
          800: "#9A3412",
        },

        blue: {
          100: "#dbeafe",
          400: "#60A5FA",
        },
        beige: {
          500: "#F5F5DC", // Beige color
        },
        pink: "#FBCFE8",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
