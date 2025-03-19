import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				light: {
					primary: {
						DEFAULT: "rgb(var(--primary) / <alpha-value>)",
						"on-primary": "rgb(var(--on-primary) / <alpha-value>)",
						"primary-container":
							"rgb(var(--primary-container) / <alpha-value>)",
						"on-primary-container":
							"rgb(var(--on-primary-container) / <alpha-value>)",
					},
					secondary: {
						DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
						"on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
						"secondary-container":
							"rgb(var(--secondary-container) / <alpha-value>)",
						"on-secondary-container":
							"rgb(var(--on-secondary-container) / <alpha-value>)",
					},
					tertiary: {
						DEFAULT: "rgb(var(--tertiary) / <alpha-value>)",
						"on-tertiary": "rgb(var(--on-tertiary) / <alpha-value>)",
						"tertiary-container":
							"rgb(var(--tertiary-container) / <alpha-value>)",
						"on-tertiary-container":
							"rgb(var(--on-tertiary-container) / <alpha-value>)",
					},
					error: {
						DEFAULT: "rgb(var(--error) / <alpha-value>)",
						"on-error": "rgb(var(--on-error) / <alpha-value>)",
						"error-container": "rgb(var(--error-container) / <alpha-value>)",
						"on-error-container":
							"rgb(var(--on-error-container) / <alpha-value>)",
					},
					surface: {
						DEFAULT: "rgb(var(--surface) / <alpha-value>)",
						"on-surface": "rgb(var(--on-surface) / <alpha-value>)",
						"surface-variant": "rgb(var(--surface-variant) / <alpha-value>)",
						"on-surface-variant":
							"rgb(var(--on-surface-variant) / <alpha-value>)",
						"surface-container-lowest":
							"rgb(var(--surface-container-lowest) / <alpha-value>)",
						"surface-container-low":
							"rgb(var(--surface-container-low) / <alpha-value>)",
						"surface-container":
							"rgb(var(--surface-container) / <alpha-value>)",
						"surface-container-high":
							"rgb(var(--surface-container-high) / <alpha-value>)",
						"surface-container-highest":
							"rgb(var(--surface-container-highest) / <alpha-value>)",
					},
					outline: {
						DEFAULT: "rgb(var(--outline) / <alpha-value>)",
						"outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
					},
				},
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "rgb(var(--border) / <alpha-value>)",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
		screens: {
			sm: "600px",
			md: "840px",
			lg: "1200px",
			xl: "1600px",
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
