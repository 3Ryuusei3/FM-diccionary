export type Theme = "light" | "dark"

export type ThemeContextType = {
	appTheme: Theme
	changeTheme: (appTheme: Theme) => void
}
