/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainColor: "#42A5F5",
        borderColor: "#E0E3EB",
        player: "#EBF2FF",
        notification: "#FF2E53",
        closedText: "#828282",
      },
      fontSize: {
        xxs: "10px",
      },
      borderWidth: {
        3: "3px",
      },
      height: {
        blockAside: "90%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
