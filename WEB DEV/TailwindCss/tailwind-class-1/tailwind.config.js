/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        blue: {
          120: "#00274d",
          220: "#305175",
          320: "#74899e",
          420: "#17385e"
        },
        green:{
          120: "#54bfd2"
        }
      }
    },
  },
  plugins: [],
}

