/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/tailwind-datepicker-react/dist/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "desktop": "url('/assets/bg-sidebar-desktop.svg')",
        "mobile": "url('/assets/bg-sidebar-mobile.svg')",
      }),

    },
  },
  plugins: [],
}
