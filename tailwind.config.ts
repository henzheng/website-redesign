/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#48cae4",
                "secondary-blue": "#0a192f"
            },
            fontFamily: {
                "nunito": "Nunito Sans, sans-serif",
                "poppins": "Poppins, sans-serif",
                "comfortaa": "Comfortaa, cursive",
                "quicksand": "Quicksand, sans-serif",
            }
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /^bg-(gray|red|orange|yellow|green|teal|blue|indigo|purple|pink|rose)-300$/
        }
    ]
}