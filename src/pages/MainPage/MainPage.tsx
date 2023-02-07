import React from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"
import { SearchBar } from "../../components/SearchBar/SearchBar"

import { ThemeContext } from "../../context/ThemeContext"
import { ThemeContextType } from "./../../context/theme"
import { FontContext } from "../../context/FontContext"
import { FontContextType } from "./../../context/font"

function MainPage() {
	const { appTheme } = React.useContext(ThemeContext) as ThemeContextType
	const { appFont } = React.useContext(FontContext) as FontContextType

	return (
		<div className="wrapper" data-theme={appTheme} data-font={appFont}>
			<Header />
			<SearchBar />
			<Results />
		</div>
	)
}

export default MainPage
