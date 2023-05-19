/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  //  npm run dev
     ["./dist/**/*.{html,js}"],
  theme: {
    ontainer: {
      center: true,
    },
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
     spacing: {
      '0': "0px",
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '8': '56px',
      '16':'76px',
      '32': '132px',
      '48': '196px',
      '64':'264px',
      '100':'404px',
      '120': '460px'
     

    },
    extend: {
     
    },
  },
  plugins: [],
}

