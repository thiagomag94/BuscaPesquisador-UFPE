/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      backgroundImage: {
        
        'imagem':
        "linear-gradient(to right, rgb(4, 4, 4),rgba(0,0,0,0.6)), url('../public/images/ufpe.jpg') ",
      
    
    },
    animation: {
      fade: 'fadeIn 1s ease-in-out',
    },

    // that is actual animation
    keyframes: theme => ({
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    }),
  },
    
  },
  plugins: [],
}
