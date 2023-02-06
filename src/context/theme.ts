export const ThemeVariables = {
	light: {
		bg: "var(--lm-bg)",
		text: "var(--lm-text)",
		subtext: "var(--lm-subtext)",
		input: "var(--lm-input)",
		toggle: "var(--toggle)",
	},
	dark: {
		bg: "var(--dm-bg)",
		text: "var(--dm-text)",
		subtext: "var(--dm-subtext)",
		input: "var(--dm-input)",
		toggle: "var(--main)",
	},
}

export type Theme = "light" | "dark"

export type ThemeContextType = {
	appTheme: Theme
	changeTheme: (appTheme: Theme) => void
}
