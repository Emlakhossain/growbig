/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: [
    {
      mytheme: {

        "primary": "#4b5563",

        "secondary": "#F000B8",

        "accent": "#37CDBE",

        "neutral": "#3D4451",

        "base-100": "#FFFFFF",

        "info": "#67e8f9",

        "success": "#36D399",

        "warning": "#a5f3fc",

        "error": "#F87272",
      },
    },
  ],
  plugins: [require("daisyui")],
}

