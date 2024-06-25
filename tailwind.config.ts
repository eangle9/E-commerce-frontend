import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '425px',
      'xs': '540px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         "cart-image": "url('/images/cart-image.svg')", 
      },
      maxHeight: {
        'custom': 'calc(100% - 96px)',
      },
      maxWidth: {
        'custom-width': 'calc(100% - 32px)'
      }
    },
  },
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: {
  //         light: '#63b3ed', // Light Blue
  //         DEFAULT: '#3182ce', // Blue
  //         dark: '#2c5282', // Dark Blue
  //       },
  //       secondary: {
  //         light: '#e2e8f0', // Light Gray
  //         DEFAULT: '#a0aec0', // Gray
  //         dark: '#4a5568', // Dark Gray
  //       },
  //       accent: {
  //         light: '#68d391', // Light Green
  //         DEFAULT: '#48bb78', // Green
  //         dark: '#2f855a', // Dark Green
  //       },
  //       background: '#ffffff', // White
  //       text: {
  //         light: '#a0aec0', // Light Gray
  //         DEFAULT: '#2d3748', // Dark Gray
  //         dark: '#1a202c', // Darker Gray
  //       },
  //     },
  //   },
  // },
  plugins: [],
};
export default config;
