import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            fontFamily: {
                sans: ["var(--font-sans)", ...fontFamily.sans],
            },
            colors: {
                primary: {
                    1: "#F3BFD3", // Soft, pastel pink
                },
                secondary: {
                    1: "#D6BBFB", // Gentle lavender
                },
                tertiary: {
                    blue: {
                        1: "#BFDBFE", // Serene sky blue
                    },
                    green: {
                        1: "#BBF7D0", // Pastel mint green
                    },
                },
                neutral: {
                    1: "#F7FAFC", // Light gray for backgrounds
                    2: "#CBD5E0", // Medium gray for borders
                    3: "#4A5568", // Dark gray for text
                },
                accent: {
                    coral: {
                        1: "#FEB2B2", // Coral/salmon pink
                    },
                    gold: {
                        1: "#F6E05E", // Golden hue
                    },
                },
                muted: {
                    1: "#E2E8F0", // Light gray for muted backgrounds
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
