/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
   

  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
    },
  },
  daisyui: {
    themes: ["dark"],
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
  ],
}

