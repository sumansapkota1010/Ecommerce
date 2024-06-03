/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7E33E0",
        "primary-light": "#F6F7FB",
        secondary: "#FB2E86",
      },
    },
  },
  plugins: [],
};
