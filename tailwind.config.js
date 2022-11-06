/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif']
      },
      borderwidthsize: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
      },
      boxShadow: {
        card1: "0 0 20px white",
      },
      backgroundImage: {
        mainBanner: "url(assets/background.png)"
      }
    },
  },
  plugins: [],
};
