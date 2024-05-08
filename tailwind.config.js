/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores primarios
        'softOrange': 'hsl(35, 77%, 62%)',
        'softRed'   : 'hsl(5, 85%, 63%)',
        
        // Colores neutrales
        'offWhite'    : 'hsl(36, 100%, 99%)',
        'grayishBlue' : 'hsl(233, 8%, 79%)',
        'darkGrayishBlue': 'hsl(236, 13%, 42%)',
        'veryDarkBlue'   : 'hsl(240, 100%, 5%)',
      }
    },
  },
  plugins: [],
}

// ## Primary

// - Soft orange: hsl(35, 77%, 62%)
// - Soft red: hsl(5, 85%, 63%)

// ### Neutral

// Off-white: hsl(36, 100%, 99%)
// Grayish blue: hsl(233, 8%, 79%)
// Dark grayish blue: hsl(236, 13%, 42%)
// Very dark blue: hsl(240, 100%, 5%)


