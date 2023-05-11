/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          250: '#EAEAEA',
        },
        neutral: {
          350: '#B5C0C7',
          450: '#8D8D8D',
          850: '#232323',
        },
        zinc: {
          650: '#626262',
        },
        lime: {
          350: '#D6D16E',
          360: '#C9CB6A',
        },
        orange: {
          650: '#F15524',
        },
        cyan: {
          750: '#208298',
        },
        red: {
          350: '#F39494',
          550: '#DD3939',
        },
      },
    },
  },
  plugins: [],
};
