/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Next.js 13+ app directory
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Legacy pages directory
    "./src/components/**/*.{js,ts,jsx,tsx}", // Components folder
    "./src/**/*.{js,ts,jsx,tsx}", // Catch all for any other directories in src
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

