/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        success: 'var(--color-success)',
        error: 'var(--color-error)'
      },
      textColor: {
        base: 'var(--color-text)',
        muted: 'var(--color-text-light)',
        inverse: 'var(--color-text-inverse)'
      },
      backgroundColor: {
        page: 'var(--color-background)',
        alt: 'var(--color-background-alt)',
        surface: 'var(--color-surface)',
        'surface-alt': 'var(--color-surface-alt)'
      },
      borderColor: {
        DEFAULT: 'var(--color-border)'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)'
      }
    },
  },
  plugins: [],
}
