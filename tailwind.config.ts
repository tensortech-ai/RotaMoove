import type { Config } from 'tailwindcss';

/**
 * Tokens espelhados de lib/core/theme/app_colors.dart e
 * lib/core/config/brand_config.dart do aplicativo Flutter.
 *
 * Site e aplicativo sao superficies separadas, mas a identidade e a
 * mesma: se a cor da marca mudar la, muda aqui tambem.
 */
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B5FCB',
          dark: '#14479A',
          light: '#E8F0FE',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FFF1E6',
        },
        success: { DEFAULT: '#16A34A', light: '#E8F6EE' },
        warning: { DEFAULT: '#F59E0B', light: '#FEF5E3' },
        ink: {
          DEFAULT: '#0F172A',
          muted: '#475569',
          subtle: '#94A3B8',
        },
        line: '#E2E8F0',
        surface: '#FFFFFF',
        canvas: '#F8FAFC',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      maxWidth: {
        content: '72rem',
        prose: '42rem',
      },
    },
  },
  plugins: [],
};

export default config;
