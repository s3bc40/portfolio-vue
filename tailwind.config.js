module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oxfordBlue: '#091540',         
        prussian: '#003049',
        celadonBlue: '#457B9D',
        powderBlue: '#A8DADC',
        honeydew: '#F1FAEE',
      }, 
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
