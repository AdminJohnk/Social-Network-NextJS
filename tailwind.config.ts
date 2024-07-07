import type { Config } from 'tailwindcss';
import flowbite from 'flowbite-react/tailwind';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}', flowbite.content()],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      'md/2': '896px',
      lg: '1024px',
      'lg/2': '1152px',
      xl: '1280px',
      'xl/2': '1408px',
      '2xl/2': '1472px',
      '2xl': '1536px'
    },

    extend: {
      colors: {
        hover: {
          1: 'var(--hover1)',
          2: 'var(--hover2)',
          3: 'var(--hover3)'
        },
        background: {
          1: 'var(--background1)',
          2: 'var(--background2)',
          3: 'hsl(var(--background))'
        },
        foreground: {
          1: 'var(--foreground1)',
          2: 'var(--foreground2)',
          3: 'var(--foreground3)',
          4: 'hsl(var(--foreground))'
        },
        text: {
          1: 'var(--text1)',
          2: 'var(--text2)',
          3: 'var(--text3)'
        },
        border: {
          1: 'var(--border1)',
          2: 'var(--border2)',
          3: 'hsl(var(--border))'
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
          3: 'var(--blue3)',
          4: 'var(--blue4)'
        },
        green: {
          1: 'var(--green1)',
          2: 'var(--green2)',
          3: 'var(--green3)',
          4: 'var(--green4)'
        },
        purple: {
          1: 'var(--purple1)',
          2: 'var(--purple2)',
          3: 'var(--purple3)',
          4: 'var(--purple4)'
        },
        pink: {
          1: 'var(--pink1)',
          2: 'var(--pink2)',
          3: 'var(--pink3)',
          4: 'var(--pink4)'
        },
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'caret-blink': {
          '0%,70%,100%': { opacity: '1' },
          '20%,50%': { opacity: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'caret-blink': 'caret-blink 1.25s ease-out infinite'
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
    flowbite.plugin()
  ]
};
export default config;
