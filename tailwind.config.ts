/** @type {import('tailwindcss').Config} */
module.exports = {
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
                "web": "Titillium Web, sans-serif",
                "mono": "Roboto Mono, monospace",
                "nunito": "Nunito Sans, sans-serif",
                "poppins": "Poppins, sans-serif"
            }
        },
    },
    plugins: [],
}