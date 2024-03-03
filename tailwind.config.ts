import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      'md/2': '896px',
      lg: '1024px',
      'lg/2': '1152px',
      xl: '1280px',
      'xl/2': '1408px',
      '2xl': '1536px'
    },
    extend: {
      colors: {
        primary: {
          '50': '#eff6ff',
          '100': '#dbeafe',
          '200': '#bfdbfe',
          '300': '#93c5fd',
          '400': '#60a5fa',
          '500': '#3b82f6',
          '600': '#2563eb',
          '700': '#1d4ed8',
          '800': '#1e40af',
          '900': '#1e3a8a',
          '950': '#172554'
        },
        hover: {
          1: 'var(--hover1)'
        },
        background: {
          1: 'var(--background1)',
          2: 'var(--background2)'
        },
        foreground: {
          1: 'var(--foreground1)',
          2: 'var(--foreground2)'
        },
        text: {
          1: 'var(--text1)',
          2: 'var(--text2)',
          3: 'var(--text3)'
        },
        border: {
          1: 'var(--border1)',
          2: 'var(--border2)'
        },
        dark: {
          1: 'var(--dark1)'
        },
        light: {
          1: 'var(--light1)'
        },
        blue: {
          1: 'var(--blue1)',
          2: 'var(--blue2)',
          3: 'var(--blue3)'
        },
        green: {
          1: 'var(--green1)',
          2: 'var(--green2)',
          3: 'var(--green3)'
        },
        purple: {
          1: 'var(--purple1)',
          2: 'var(--purple2)',
          3: 'var(--purple3)'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('flowbite/plugin'), require('tailwindcss-animate')]
};
export default config;
