/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            white: '#FFFFFF',
            'background-black': '#070724',
            'dark-grey': '#38384F',
            'light-grey': '#838391',
            'light-blue': '#419EBB',
            'dark-yellow': '#EDA249',
            purple: '#6F2ED6',
            'dull-orange': '#D14C32',
            red: '#D83A34',
            'dirty-orange': '#CD5120',
            'sea-green': '#1EC2A4',
            'light-blue': '#2D68F0',
        },

        extend: {
            fontFamily: {
                antonio: ['Antonio'],
                spartan: ['"League Spartan"'],
            },
        },
    },
    plugins: [require('daisyui')],
};
