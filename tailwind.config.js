/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
    
      screens: {
        
        sm:'640px',
       xmd:'768px',
        md:'1024px',
       lg: '1024px',
      xl: '1280px',
      },
      fontFamily:{
        'playfair':'Playfair Display',
      }

    },
    
  },
  plugins: [
    require('flowbite/plugin')
  ],
  
}