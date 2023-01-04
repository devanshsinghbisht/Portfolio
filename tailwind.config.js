/** @type {import('tailwindcss').Config} */
module.exports = {  
  resolve: {
    extensions: ['' , '.js', '.jsx']
  },
  darkMode:"class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        lightpink : '#DC2560',
        lightblue : '#1D2671',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        irish:['Irish Grover', 'cursive'],
        Ramabhadra : ['Ramabhadra' , 'sans-serif'],
        Archivo : [ "Archivo Black" , "sans-serif" ],
        Pacifico : ['Pacifico', "cursive"],
        Gorditas : ['Gorditas', "cursive"],
        Alkalami: ['Alkalami', "serif"],
      },
      container: {
        center: true,
      },
      dropShadow: {
        '3xl': '2px 8px 8px rgba(7, 7, 7, 0.7 )',
      },    
      zIndex: {
        '100': '100',
      },
      boxShadow: {
        '3xl': '0 0 0 7px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [
    // require('flowbite/plugin'),  
  ],
};

