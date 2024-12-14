/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primaryDark: "#1D3557", // Navy Blue
                primaryLight: "#457B9D", // Steel Blue
                secondary: "#F1FAEE", // Soft Mint
                accent: "#E63946", // Crimson Red
                background: "#FAFAFA", // Soft White
            },
        },
    },
    plugins: [require("daisyui")],
};
