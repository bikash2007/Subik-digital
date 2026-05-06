/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Digital Orbit Palette
        'bg-midnight': '#0B0E23',
        'accent-green': '#36D399',
        'accent-blue': '#2563EB',
        'accent-cyan': '#00D4FF',
        'text-main': '#FFFFFF',

        // Legacy/Fallback Dark editorial backgrounds (keeping these to avoid breaking things entirely before I replace them in CSS)
        'dark-bg': '#0B0E23', // Mapped to midnight
        'dark-card': 'rgba(11, 14, 35, 0.8)', // Glassmorphism base
        'dark-border': '#2563EB', // Mapped to blue
        'light-bg': '#FAFAF8',
        'light-card': '#FFFFFF',
        'light-border': '#E8E6E1',

        // Legacy Brand accents mapped
        'accent-orange': '#36D399', // Mapped to green
        'accent-orange-light': '#00D4FF', // Mapped to cyan
        'accent-orange-muted': 'rgba(54, 211, 153, 0.15)',
        'accent-teal': '#2563EB', // Mapped to blue
        'accent-teal-light': '#00D4FF', // Mapped to cyan
        'accent-teal-muted': 'rgba(37, 99, 235, 0.15)',

        // Text
        'text-dark': '#0B0E23',
        'text-light': '#FFFFFF',
        'text-muted-dark': 'rgba(255, 255, 255, 0.55)',
        'text-muted-light': 'rgba(11, 14, 35, 0.55)',
      },
      fontFamily: {
        'neutra': ['"Neutra Display"', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        // Legacy
        'syne': ['Poppins', 'sans-serif'], // Mapping syne to poppins for now
        'jakarta': ['Inter', 'sans-serif'], // Mapping jakarta to inter
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subik-gradient': 'linear-gradient(90deg, #36D399, #00D4FF)',
        'orange-glow': 'radial-gradient(ellipse at bottom left, rgba(54, 211, 153, 0.25) 0%, transparent 65%)', // Mapped to green
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'green-sm': '0 0 15px rgba(54, 211, 153, 0.3)',
        'green-md': '0 0 30px rgba(54, 211, 153, 0.4)',
        'green-lg': '0 0 60px rgba(54, 211, 153, 0.35)',
        'blue-sm': '0 0 15px rgba(37, 99, 235, 0.3)',
        'card-dark': '0 4px 24px rgba(0,0,0,0.5)',
        'card-lift': '0 20px 50px rgba(0,0,0,0.6)',
        'card-light': '0 4px 24px rgba(0,0,0,0.08)',
        'card-lift-light': '0 20px 50px rgba(0,0,0,0.15)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'counter': 'counter 2s ease-out forwards',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(54, 211, 153, 0.6)' },
          '50%': { boxShadow: '0 0 0 10px rgba(54, 211, 153, 0)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
}