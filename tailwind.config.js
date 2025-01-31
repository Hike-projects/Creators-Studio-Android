/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",       // Hugo templates in 'layouts/'
    "./content/**/*.md",         // Markdown files in 'content/'
    "./assets/**/*.{js,css}",    // Any custom CSS or JS files in 'assets/'
  ],
  theme: {
    extend: {},                  // Customize Tailwind theme (optional)
  },
  plugins: [],                   // Add Tailwind plugins here (optional)
};
