module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-color': '#6563FF',
        'secondary-color': '#FF7353',
        'tertiary-color': '#1C1E4F',

      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
