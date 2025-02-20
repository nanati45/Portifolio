/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      brand: "#12F7D6",
      bg: "#292F36",
      brand2: "#98FAEC",
      bg2: "#1A1E23",
      grey: "#43454D",
    },
    fontFamily: {
      plex: ["IBM Plex Mono", "monospace"],
      ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
};
export const plugins = [];
