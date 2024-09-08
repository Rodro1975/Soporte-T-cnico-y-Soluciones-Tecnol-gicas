/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8D432", // Amarillo
        secondary: "#000000", // Negro
        background: "#F0F0F0", // Gris Claro
        text: "#333333", // Gris Oscuro
        white: "#FFFFFF",
      },
    },
  },

  plugins: [],
};
