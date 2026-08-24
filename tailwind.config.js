/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette pulled from the Indian Helping Trust "three hands" logo
        brand: {
          // Palette derived from the official IHT letterhead
          // (saffron-orange band, rich green band, white, logo blue/green/red)
          orange: '#F26A21',
          orangedark: '#D1541A',
          orangetint: '#FDF2EA',
          green: '#2FA148',
          greendark: '#1E7A34',
          greendeep: '#14532D',
          greentint: '#EDF6EE',
          blue: '#1E9BD7',
          bluedark: '#177BAB',
          red: '#E62B4A',
          reddark: '#C31F3B',
          ink: '#1F2733',
          slate: '#5B6B7D',
          mist: '#F4F8FB',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1.25rem',
        screens: { '2xl': '1200px' },
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
