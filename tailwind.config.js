/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        velblue: '#3097b9',
        velgreen: '#40bf89',
        velorange: '#f3a64b',
        velred: '#fd5a4b',
        velyellow: '#f8dc5a',
        velyellowgreen: '#d9e252',
        veldarkgray: '#37474f',
        velgray: '#76838f',
        vellightgray: '#bbc1c7',
        vellink: '#56bfb5',
      },
    },
  },
  plugins: [],
}

