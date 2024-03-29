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
        "peaceful-rain": "#f1f8f4",
        yellow: "#efd372",
        "city-rain": " #525c60",
        "shark-fin": "#969696",
        "dhūsar-grey": "#ababab",
        "fortress-grey": "#b8b8b8",
        "moon-landing": "#a7a7a7",
        "disco-ball-light": "#d5d5d5",
        "disco-ball": "#d4d4d4",
        "silver-lake": " #dedddd",
        coronation: "#ececec",
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
        "home-organic1": "url(./assets/img/home-organic1.png)",
        "home-organic2": "url(./assets/img/home-organic2.png)",
        "home-organic3": "url(./assets/img/home-organic3.png)",
        "home-new1": "url(./assets/img/home-food1.png)",
        "home-new2": "url(./assets/img/home-food2.png)",
        "about-hero": "url(./assets/img/about-heroBg.png)",
        "shop-hero":"url(./assets/img/shop-heroBg.png)",
        "shop-single":"url(./assets/img/shop-singleBg.jpg)",
      },
    },
  },
  plugins: [],
};
