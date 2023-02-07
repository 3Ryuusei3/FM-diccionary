import React from "react"

import { Font, FontContextType } from "./font"

type FontContextProviderProps = {
	children: React.ReactNode
}
export const FontContext = React.createContext<FontContextType | null>(null)

const FontProvider = ({ children }: FontContextProviderProps) => {
	const [fontMode, setFontMode] = React.useState<Font>("Sans Serif")
	return <FontContext.Provider value={{ appFont: fontMode, changeFont: setFontMode }}>{children}</FontContext.Provider>
}

export default FontProvider
