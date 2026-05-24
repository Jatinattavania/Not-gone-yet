/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                golden: '#fbd457',
                amber: '#fac128',
                'soft-blue': '#76a9d4',
                navy: '#1a1a2e',
                'deep-black': '#0d1117',
                cream: '#fefdf8',
            },
            fontFamily: {
                'display': ['Poppins', 'sans-serif'],
                'body': ['Poppins', 'sans-serif'],
                'accent': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
