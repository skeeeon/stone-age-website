/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        'primary': {
          '50': 'var(--color-primary-50)',
          '100': 'var(--color-primary-100)',
          '200': 'var(--color-primary-200)',
          '300': 'var(--color-primary-300)',
          '400': 'var(--color-primary-400)',
          '500': 'var(--color-primary-500)',
          '600': 'var(--color-primary-600)',
          '700': 'var(--color-primary-700)',
          '800': 'var(--color-primary-800)',
          '900': 'var(--color-primary-900)',
          '950': 'var(--color-primary-950)',
          'DEFAULT': 'var(--color-primary)',
        },
        'surface': {
          'primary': 'var(--color-surface-primary)',
          'secondary': 'var(--color-surface-secondary)',
          'tertiary': 'var(--color-surface-tertiary)',
          'hover': 'var(--color-surface-hover)',
          'DEFAULT': 'var(--color-surface)',
          'alt': 'var(--color-surface-alt)',
        },
        'content': {
          'primary': 'var(--color-content-primary)',
          'secondary': 'var(--color-content-secondary)',
          'DEFAULT': 'var(--color-text)',
          'light': 'var(--color-text-light)',
          'inverse': 'var(--color-text-inverse)'
        },
        'border': {
          'primary': 'var(--color-border-primary)',
          'secondary': 'var(--color-border-secondary)',
          'DEFAULT': 'var(--color-border)',
        },
        'accent': 'var(--color-accent)',
        'success': 'var(--color-success)',
        'error': 'var(--color-error)'
      },
      backgroundColor: {
        'page': 'var(--color-background)',
        'alt': 'var(--color-background-alt)',
      },
      boxShadow: {
        'theme-sm': 'var(--shadow-sm)',
        'theme-md': 'var(--shadow-md)',
        'theme-lg': 'var(--shadow-lg)',
        'sm': 'var(--shadow-sm)',
        'DEFAULT': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)'
      }
    },
  },
  plugins: [],
}
