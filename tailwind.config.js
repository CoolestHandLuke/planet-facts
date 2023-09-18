/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                antonio: ['Antonio'],
                spartan: ['"League Spartan"'],
            },
            colors: {
                white: '#FFFFFF',
                'background-black': '#070724',
                'dark-grey': '#38384F',
                'light-grey': '#838391',
                ['mercury']: '#419EBB',
                ['venus']: '#EDA249',
                ['earth']: '#6F2ED6',
                ['mars']: '#D14C32',
                ['jupiter']: '#D83A34',
                ['saturn']: '#CD5120',
                ['uranus']: '#1EC2A4',
                ['neptune']: '#2D68F0',
            },
            backgroundImage: {
                'stars-background': "url('../../assets/background-stars.svg')",
            },
        },
    },
    plugins: [require('daisyui')],
    safelist: [
        {
            pattern:
                /(bg|text|border)-(background-black|dark-grey|light-grey|mercury|venus|earth|mars|jupiter|saturn|uranus|neptune)/,
        },
    ],
};
