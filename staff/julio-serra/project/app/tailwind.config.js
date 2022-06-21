module.exports =  {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'principal-color': '#6563FF',
        'secondary-color': '#FF7353',
        'tertiary-color': '#1C1E4F',
        'cuartiary-color': '#4E54F0',
        'color-spaces': '#eaeaea'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin'),
    require('flowbite/plugin')
  ],
}
