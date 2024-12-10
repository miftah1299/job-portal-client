/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#E63946", // Crimson Red
                secondary: "#F1FAEE", // Soft Mint
                accent: "#457B9D", // Steel Blue
                background: "#FAFAFA", // Soft White
                textPrimary: "#1D3557", // Navy Blue
            },
        },
    },
    plugins: [require("daisyui")],
};
