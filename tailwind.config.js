/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7E33E0",
        "primary-light": "#F6F7FB",
        "primary-dark": "#151875",
        secondary: "#FB2E86",
      },
      backgroundImage: {
        "banner-1": "url('./src/assets/images/banner1.png')",
        "banner-2": "url('./src/assets/images/banner2.png')",
        "banner-3": "url('./src/assets/images/banner3.png')",
      },
    },
  },
  plugins: [],
};
