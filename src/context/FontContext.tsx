import React, { useState } from "react"

import { Font, FontContextType } from "./font"

type FontContextProviderProps = {
	children: React.ReactNode
}
export const FontContext = React.createContext<FontContextType | null>(null)

const FontProvider = ({ children }: FontContextProviderProps) => {
	const [fontMode, setFontMode] = useState<Font>("Sans Serif")
	return <FontContext.Provider value={{ appFont: fontMode, changeFont: setFontMode }}>{children}</FontContext.Provider>
}

export default FontProvider
