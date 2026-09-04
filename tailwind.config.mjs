/** @type {import('tailwindcss').Config} */
// Tokens mirror the CleanQuote design system (tokens/colors.css, tokens/typography.css).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#003366',
          dark: '#002244',
          light: '#004C99',
          mid: '#1A2E5A',
          deep: '#111D3A',
          tint: '#eef3fa',
          panel: '#f2f6fc',
          'panel-border': '#d8e3f2',
        },
        orange: {
          DEFAULT: '#FF8C00',
          dark: '#FF7700',
          deep: '#E67E00',
          deeper: '#C96A00',
          tint: '#FFF2E2',
          panel: '#fff8ee',
          'panel-border': '#f5e2c2',
        },
        page: '#f6f8fb',
        ink: {
          DEFAULT: '#16233a',
          body: '#4c5871',
          secondary: '#7c8699',
          muted: '#99a1b3',
          faint: '#b4bac8',
          'on-navy-dim': '#b9c8dd',
        },
        line: {
          card: '#e6eaf1',
          row: '#eef1f6',
          input: '#dde3ec',
          muted: '#e0e5ee',
        },
        panel: '#f1f4f8',
        success: {
          DEFAULT: '#1e8e4e',
          tint: '#eaf6ef',
          border: '#cfe9da',
        },
      },
      borderRadius: {
        card: '16px',
        'row-card': '14px',
        input: '10px',
      },
      boxShadow: {
        lift: '0 10px 30px -12px rgba(0, 51, 102, 0.18)',
      },
      letterSpacing: {
        eyebrow: '0.1em',
        wordmark: '-0.03em',
      },
    },
  },
  plugins: [],
};
