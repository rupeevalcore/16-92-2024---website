/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
            colors: {
                background: '#030712',
                surface: '#0f172a',
                primary: '#0066cc',
                secondary: '#003d7a',
            },
        },
    },
    plugins: [],
}
