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
            fontFamily: {
                "poppins": "Poppins, sans-serif",
            }
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /^bg-(gray|red|orange|yellow|green|teal|blue|indigo|purple|pink|rose)-300$/
        },
    ]
}