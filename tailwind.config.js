/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                primary:
                    "6px 6px 12px rgb(0,0,0,0.08), -6px -6px 12px rgb(255,255,255,1)",
            },
        },
    },
    plugins: [],
  }