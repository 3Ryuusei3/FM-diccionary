import React from "react"

import { Theme, ThemeContextType } from "./theme"

type ThemeContextProviderProps = {
	children: React.ReactNode
}

/* export const ThemeContext = createContext(ThemeVariables)

export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
	return <ThemeContext.Provider value={ThemeVariables}>{children}</ThemeContext.Provider>
} */

export const ThemeContext = React.createContext<ThemeContextType | null>(null)

const ThemeProvider = ({ children }: ThemeContextProviderProps) => {
	const [themeMode, setThemeMode] = React.useState<Theme>("light")
	return <ThemeContext.Provider value={{ appTheme: themeMode, changeTheme: setThemeMode }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
