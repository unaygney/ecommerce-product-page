/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'custom': ['Kumbh Sans', 'sans-serif'], // 'Kumbh Sans' yerine kullanmak istediğiniz fontun adını yazın
    },
    extend: {},
  },
  plugins: [],
};
