export type Font = "Serif" | "Sans Serif" | "Mono"

export type FontContextType = {
	appFont: Font
	changeFont: (appTheme: Font) => void
}
