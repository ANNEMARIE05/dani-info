/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "danie-noir": "#000000",
        "danie-teal": "#00666f",
        "danie-teal-fonce": "#004b52",
        "danie-blanc": "#f9fafb",
      },
      fontFamily: {
        titre: ["'Poppins'", "system-ui", "sans-serif"],
        texte: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "carte-danie": "0 18px 40px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};



