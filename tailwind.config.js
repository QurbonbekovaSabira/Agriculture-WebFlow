/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1640px",
        },
      },
      colors: {
        primary: "#274C5B",
        "endless-sea": "#335b6b",
        secondary: "#7EB693",
        yellow: "#efd372",
        "city-rain": " #525c60",
        "dhūsar-grey": "#ababab",
        "fortress-grey": "#b8b8b8",
        "disco-ball": "#d4d4d4",
        "silver-lake": " #dedddd",
        "christmas-silver": "#e0e0e0",
        beluga: "#f1f1f1",
        doctor: "#f9f8f8",
        "heavy-sugar": "#eff6f1",
        "dr-white": " #fafafa",
        doctor: "#f9f8f8",
      },
      fontFamily: {
        Yellowtail: "Yellowtail",
        FontFace: {},
      },
      backgroundImage: {
        "home-about1": "url(./assets/img/home-about1.png)",
        "home-about2": "url(./assets/img/home-about2.png)",
      },
    },
  },
  plugins: [],
};
