/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-body)"],
        serif: ["var(--font-heading)"],
        heading: ["var(--font-heading)"],
      },
      colors: {
        brand: {
          orange: "var(--brand-orange)",
          text: "var(--brand-text)",
        },
        background: "var(--background)",
        surface: "var(--surface)",
        text: "var(--text)",
        "text-secondary": "var(--text-secondary)",
        "text-muted": "var(--text-muted)",
        foreground: "var(--text)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--text)",
        },
        popover: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          hover: "var(--primary-hover)",
          foreground: "var(--background)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--background)",
        },
        muted: {
          DEFAULT: "var(--text-muted)",
          foreground: "var(--text-secondary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--background)",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        border: "var(--border)",
        input: "var(--border)",
        ring: "var(--primary)",
        chart: {
          "1": "var(--primary)",
          "2": "var(--secondary)",
          "3": "var(--primary-dark)",
          "4": "var(--primary-light)",
          "5": "var(--accent)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
