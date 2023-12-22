/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   

  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["winter"],
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}

