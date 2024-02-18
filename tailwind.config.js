/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: {
          1: "rgb(var(--color-accent-1) / <alpha-value>)",
          2: "rgb(var(--color-accent-2) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
