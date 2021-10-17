import { defineConfig } from 'windicss/helpers'
import typography from 'windicss/plugin/typography'
import lineClamp from 'windicss/plugin/line-clamp'
import aspectRatio from 'windicss/plugin/aspect-ratio'
import plugin from 'windicss/plugin'

const defaultTheme = require('windicss/defaultTheme')

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography,
    lineClamp,
    aspectRatio,
    // @ts-ignore
    plugin(({ addUtilities, addBase, theme }) => {
      const newSansSerif = {
        // desktop-sans text
        '.d-ss-text-micro': {
          fontSize: '.625rem',
          lineHeight: '1.125rem',
          fontWeight: 'normal',
          letterSpacing: '0.5px',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 10px
        '.d-ss-text-xsmall': {
          fontSize: '.75rem',
          lineHeight: '1.375rem',
          fontWeight: 'normal',
          letterSpacing: '0.25px',
          fontFamily: theme('fontFamily.sans'),
        }, // 12px
        '.d-ss-text-small': {
          fontSize: '.875rem',
          lineHeight: '1.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 14px
        '.d-ss-text-medium': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 16px
        '.d-ss-text-large': {
          fontSize: '1.125rem',
          lineHeight: '2rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 18px
        '.d-ss-text-xlarge': {
          fontSize: '1.25rem',
          lineHeight: '2rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 20px

        // desktop-sans link
        '.d-ss-link-micro': {
          fontSize: '.625rem',
          lineHeight: '1.125rem',
          fontWeight: '500',
          letterSpacing: '0.5px',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 10px
        '.d-ss-link-xsmall': {
          fontSize: '.75rem',
          lineHeight: '1.375rem',
          fontWeight: '500',
          letterSpacing: '0.25px',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 12px
        '.d-ss-link-small': {
          fontSize: '.875rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 14px
        '.d-ss-link-medium': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 16px
        '.d-ss-link-large': {
          fontSize: '1.125rem',
          lineHeight: '2rem',
          fontWeight: '500',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 18px
        '.d-ss-link-xlarge': {
          fontSize: '1.25rem',
          lineHeight: '2rem',
          fontWeight: '500',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 20px

        // desktop-sans leading
        '.d-ss-leading-xsmall': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 24px
        '.d-ss-leading-small': {
          fontSize: '2rem',
          lineHeight: '3rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 32px
        '.d-ss-leading-medium': {
          fontSize: '3rem',
          lineHeight: '3.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 48px
        '.d-ss-leading-large': {
          fontSize: '3.5rem',
          lineHeight: '4.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 56px
        '.d-ss-leading-xlarge': {
          fontSize: '4rem',
          lineHeight: '5.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 64px

        // desktop-sans heading
        '.d-ss-heading-xsmall': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 24px
        '.d-ss-heading-small': {
          fontSize: '2.5rem',
          lineHeight: '3rem',
          fontWeight: 'bold',
          letterSpacing: '0.25px',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 40px
        '.d-ss-heading-medium': {
          fontSize: '3rem',
          lineHeight: '3.5rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 48px
        '.d-ss-heading-large': {
          fontSize: '3.5rem',
          lineHeight: '4.5rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 56px
        '.d-ss-heading-xlarge': {
          fontSize: '4rem',
          lineHeight: '5.5rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.sans'),
        }, // 64px
      }

      const newNeoGrotesque = {
        // desktop-neo grotesque leading
        '.d-ng-leading-xsmall': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 24px
        '.d-ng-leading-small': {
          fontSize: '2rem',
          lineHeight: '3rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 32px
        '.d-ng-leading-medium': {
          fontSize: '3rem',
          lineHeight: '3.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 48px
        '.d-ng-leading-large': {
          fontSize: '3.5rem',
          lineHeight: '4.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 56px
        '.d-ng-leading-xlarge': {
          fontSize: '4rem',
          lineHeight: '5.5rem',
          fontWeight: 'normal',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 64px

        // desktop-neo grotesque heading
        '.d-ng-heading-xsmall': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 24px
        '.d-ng-heading-small': {
          fontSize: '2.5rem',
          lineHeight: '3rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 40px
        '.d-ng-heading-medium': {
          fontSize: '3rem',
          lineHeight: '3.5rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 48px
        '.d-ng-heading-large': {
          fontSize: '3.5rem',
          lineHeight: '4.5rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 56px
        '.d-ng-heading-xlarge': {
          fontSize: '4rem',
          lineHeight: '5.5rem',
          fontWeight: 'bold',
          fontStyle: 'normal',
          fontFamily: theme('fontFamily.neogrotesque'),
        }, // 64px
      }

      addUtilities({ ...newSansSerif, ...newNeoGrotesque })
    }),
  ],
  safelist: ['prose'],
  theme: {
    screens: {
      sm: '0px',
      md: '768px',
      air: '912px',
      lg: '1152px',
      xl: '1366px',
      '2xl': '2560',
      // '3xl': '1920px',
      //
      // phone: '0px',
      // tablet: '768',
      // air: 912,
      // lg: 1152,
      // xl: 1366,
      // dxl: 2560,
    },
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans, 'Rubik'],
        neogrotesque: [...defaultTheme.fontFamily.sans, 'RF Dewi Extended'],
      },
      colors: {
        grayscale: {
          'off-black': '#000',
          body: '#131313',
          ash: '#1E1F23',
          input: '#FBFBFC',
          'off-white': '#FFF',

          // label: '#B6B6C9',
          // placehold: '#B6B6C9',
          line: '#D9DBE9',
          input: '#FBFBFC',
          bg: '#F0F0F3',
        },
        transparent: {
          'light-95': '#FBFBFCF2',
          'light-75': '#FBFBFCBF',
          'light-65': '#FBFBFCA6',
          'light-40': '#FBFBFC66',
          'light-25': '#FBFBFC40',
          'light-10': '#FBFBFC1A',

          'grayscale-95': '#7D8296F2',
          'grayscale-75': '#7D8296BF',
          'grayscale-65': '#7D8296A6',
          'grayscale-40': '#7D829666',
          'grayscale-25': '#7D829640',
          'grayscale-10': '#7D82961A',

          'dark-95': '#131313F2',
          'dark-75': '#131313BF',
          'dark-65': '#131313A6',
          'dark-40': '#13131366',
          'dark-25': '#13131340',
          'dark-10': '#1313131A',
        },
        primary: {
          default: '#5468FF',
          dark: '#1A2493',
          darkmode: '#98A6FF',
          bg: '#BAC5FF',
          light: '#DCE2FF',
        },
        secondary: {
          default: '#005BD4',
          dark: '#0041AC',
          darkmode: '#50C8FC',
          bg: '#8DE9FF',
          light: '#E3FEFF',
        },
        success: {
          default: '#95DB7D',
          dark: '#267A20',
          darkmode: '#A6F787',
          bg: '#C6FFAB',
          light: '#F7FFEE',
        },
        warning: {
          default: '#FF8E68',
          dark: '#7A1317',
          darkmode: '#FFC7A4',
          bg: '#FFDEC2',
          light: '#FFF0E0',
        },
        error: {
          default: '#FB7575',
          dark: '#781638',
          darkmode: '#FDBAAC',
          bg: '#FED6C8',
          light: '#FEEDE3',
        },
      },
      borderRadius: {
        DEFAULT: '.5rem',
        '2.5xl': '1.25rem', // 20px
        '3.5xl': '1.75rem', // 28px
        '4xl': '2rem', // 32px
        '6xl': '3rem', // 48px
      },
      height: {
        test: 'calc(100vh - 7.5rem)',
      },
      fontSize: {
        bodyxsmall: ['.75rem', { fontSize: '.75rem', lineHeight: '1.8333', fontWeight: 400, letterSpacing: '0.25px' }], // 12px
        bodysmall: ['.875rem', { fontSize: '.875rem', lineHeight: '1.714285', fontWeight: 400 }], // 14px
        bodymedium: ['1rem', { fontSize: '1rem', lineHeight: '1.5', fontWeight: 400 }], // 16px
        bodylarge: ['1.125rem', { fontSize: '1.125rem', lineHeight: '1.777', fontWeight: 400 }], // 18px
        bodyxlarge: ['1.25rem', { fontSize: '1.25rem', lineHeight: '1.6', fontWeight: 400 }], // 20px
        displayxsmall: ['1.5rem', { fontSize: '1.5rem', lineHeight: '1.333', letterSpacing: '1px' }], // 24px
        displaysmall: ['2.5rem', { fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '1px' }], // 40px
        displaymedium: ['3rem', { fontSize: '3rem', lineHeight: '1.1666', letterSpacing: '1px' }], // 48px
        displaylarge: ['3.5rem', { fontSize: '3.5rem', lineHeight: '1.2857', letterSpacing: '1px' }], // 56px
        displayhuge: ['4rem', { fontSize: '4rem', lineHeight: '1.375', letterSpacing: '1px' }], // 88px
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.grayscale.ash'),
            strong: {
              fontWeight: theme('fontWeight.bold'),
            },
            fontSize: theme('fontSize.normal'),
            lineHeight: theme('lineHeight.normal'),
            a: {
              fontWeight: theme('fontWeight.medium'),
            },
            h1: { fontSize: '4rem', lineHeight: '1.375', fontWeight: 700, letterSpacing: '1px' },
            h2: { fontSize: '4rem', lineHeight: '1.375', fontWeight: 700, letterSpacing: '1px' },
            h3: { fontSize: '3.5rem', lineHeight: '1.2857', fontWeight: 700, letterSpacing: '1px' },
            h4: { fontSize: '3rem', lineHeight: '1.1666', fontWeight: 700, letterSpacing: '1px' },
            h5: { fontSize: '2.5rem', lineHeight: '1.2', fontWeight: 700, letterSpacing: '1px' },
            h6: { fontSize: '1.5rem', lineHeight: '1.333', fontWeight: 700, letterSpacing: '1px' },
          },
        },
      }),
      opacity: {
        65: '0.65',
      },
      spacing: {
        5.5: '1.375rem', // 22px
        15.5: '3.875rem', // 62px
        22: '5.5rem', // 88px
      },
      borderWidth: {
        DEFAULT: '2px',
      },
      dropShadow: {
        small: '0 0 1rem rgba(0, 0, 0, 0.04)',
        DEFAULT: '0 0 2rem rgba(0, 0, 0, 0.04)',
        medium: '0 0 2rem rgba(0, 0, 0, 0.04)',
        large: '0 0 4.5rem rgba(0, 0, 0, 0.04)',
      },
      boxShadow: {
        small: '0 0 1rem rgba(0, 0, 0, 0.04)',
        DEFAULT: '0 0 2rem rgba(0, 0, 0, 0.04)',
        medium: '0 0 2rem rgba(0, 0, 0, 0.04)',
        large: '0 0 4.5rem rgba(0, 0, 0, 0.04)',
        'small-primary-bg': '0 0 1rem #BAC5FF',
        'line-primary-bg-left': '1px 0 .25rem #BAC5FF',
      },
      blur: {
        xl: '30px',
      },
      maxWidth: () => ({
        xs: '18.5rem',
        sm: '23rem',
      }),
    },
    variants: {
      fontSize: ['responsive', 'hover', 'focus', 'group-disabled'],
    },
  },
  extract: {
    include: ['src/**/*.{vue,html,ts,js}', '**/*.vue', '*.vue', 'node_modules/majestic-ui/dist/*.js'],
    exclude: ['node_modules', '.git'],
  },
})
