/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Barlow", "sans-serif"],
    },
    fontSize: {
      heading: "42px",
      "body-1": "16px",
      "body-2": "14px",
      "body-3": "12px",
    },
    extend: {
      colors: {
        primary: "#29658A",
        secndary: "#060F14",
        "secndary-2": "#060F14",
        accent: "#FE654F",
        green: "#27AE60",
        red: "#FF6049",
      },
    },
  },
  plugins: [],
};
