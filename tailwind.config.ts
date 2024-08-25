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
                "bogart": "Bogart, sans-serif",
                "mallory": ["Mallory", "sans-serif"],
                "satoshi": ["Satoshi", "sans-serif"],
                "sentient": ["Sentient", "sans-serif"],
                "gambetta": ["Gambetta", "sans-serif"],
                "bespoke": ["Bespoke", "sans-serif"],
            },
            textDecorationStyle: {
                dotted: "dotted",
            }
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
            '.text-decoration-dotted': {
                'text-decoration-style': 'dotted',
            }
            })
        }
        
    ],
    safelist: [
        {
            pattern: /^bg-(gray|red|orange|yellow|green|teal|blue|indigo|purple|pink|rose)-300$/
        },
    ]
}