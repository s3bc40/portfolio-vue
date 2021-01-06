module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#1FA2FF',
          100: '#0A99FF',
          200: '#008FF5',
          300: '#0083E0',
          400: '#0077CC',
          500: '#006BB8',
          600: '#005FA3',
          700: '#00538F',
          800: '#00477A',
          900: '#003C66'
        },
        secondary: {
          50: '#F8EAC9',
          100: '#F6E3B6',
          200: '#F4DCA4',
          300: '#F2D591',
          400: '#F0CE7F',
          500: '#EEC76D',
          600: '#ECC05B',
          700: '#EAB948',
          800: '#E7B236',
          900: '#E5AB24'        
        },
        tertiary: {
          50: '#61988E',
          100: '#5F958B',
          200: '#588980',
          300: '#507C74',
          400: '#487069',
          500: '#40645E',
          600: '#385752',
          700: '#304B46',
          800: '#283E3A',
          900: '#20322E'           
        },
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
