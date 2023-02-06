import React from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"
import { SearchBar } from "../../components/SearchBar/SearchBar"

import { ThemeContext } from "../../context/ThemeContext"
import { Theme, ThemeContextType } from "./../../context/theme"

function MainPage() {
	const { appTheme } = React.useContext(ThemeContext) as ThemeContextType

	return (
		<div className="wrapper" data-theme={appTheme}>
			<Header />
			<SearchBar />
			<Results />
		</div>
	)
}

export default MainPage
