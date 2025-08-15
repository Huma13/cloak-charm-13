
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				lavender: {
          			100: "#f5f0ff",
					200: "#e5deff",
					300: "#d6bcfa",
					400: "#b794f4",
					500: "#9b87f5",
					600: "#7e69ab",
					700: "#6e59a5",
					800: "#553c9a",
					900: "#44337a"
				},
				softpink: {
					100: "#ffdee2",
					200: "#ffbdc5",
					300: "#ff9ca8",
					400: "#ff7b8b",
					500: "#ff5a6e",
					600: "#cc4858",
					700: "#993642",
					800: "#66242c",
					900: "#331216"
				},
				// Add new pastel colors
				pastelgreen: {
					100: "#e6ffe6",
					200: "#ccffcc",
					300: "#b3ffb3",
					400: "#99ff99",
					500: "#80ff80",
					600: "#66cc66",
					700: "#4d994d",
					800: "#336633",
					900: "#1a331a"
				},
				pastelblue: {
					100: "#e6f2ff",
					200: "#cce5ff",
					300: "#b3d9ff",
					400: "#99ccff",
					500: "#80bfff",
					600: "#6699cc",
					700: "#4d7399",
					800: "#334c66",
					900: "#1a2633"
				},
				pastelyellow: {
					100: "#ffffcc",
					200: "#ffff99",
					300: "#ffff66",
					400: "#ffff33",
					500: "#ffff00",
					600: "#cccc00",
					700: "#999900",
					800: "#666600",
					900: "#333300"
				},
				pastelpink: {
					100: "#ffe6f2",
					200: "#ffcce6",
					300: "#ffb3d9",
					400: "#ff99cc",
					500: "#ff80bf",
					600: "#cc6699",
					700: "#994d73",
					800: "#66334c",
					900: "#331a26"
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(10px)"
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)"
					}
				},
				"scale-in": {
					"0%": {
						transform: "scale(0.95)",
						opacity: "0"
					},
					"100%": {
						transform: "scale(1)",
						opacity: "1"
					}
				},
				"float": {
					"0%, 100%": {
						transform: "translateY(0)"
					},
					"50%": {
						transform: "translateY(-10px)"
					}
				},
				"pulse": {
					"0%, 100%": {
						opacity: "1"
					},
					"50%": {
						opacity: "0.7"
					}
				},
				"spin-slow": {
					"0%": {
						transform: "rotate(0deg)"
					},
					"100%": {
						transform: "rotate(360deg)"
					}
				},
				"bounce-subtle": {
					"0%, 100%": {
						transform: "translateY(0)",
						animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
					},
					"50%": {
						transform: "translateY(-15px)",
						animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
					}
				}
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.7s ease-out",
				"scale-in": "scale-in 0.5s ease-out",
				"float": "float 3s ease-in-out infinite",
				"pulse": "pulse 2s ease-in-out infinite",
				"spin-slow": "spin-slow 6s linear infinite",
				"bounce-subtle": "bounce-subtle 2s infinite"
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				serif: ["Playfair Display", "serif"]
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
