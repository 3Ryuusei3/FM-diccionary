import React, { useState, useEffect } from "react"
import { Header } from "../../components/Header/Header"
import { Results } from "../../components/Results/Results"
import { SearchBar } from "../../components/SearchBar/SearchBar"

import { ThemeContext } from "../../context/ThemeContext"
import { ThemeContextType } from "./../../context/theme"
import { FontContext } from "../../context/FontContext"
import { FontContextType } from "./../../context/font"

import dictionaryService from "../../services/Dictionary.service"

function MainPage() {
	const { appTheme } = React.useContext(ThemeContext) as ThemeContextType
	const { appFont } = React.useContext(FontContext) as FontContextType

	const [query, setQuery] = useState("")
	const [result, setResult] = useState([])

	const getDictionaryEntry = () => {
		dictionaryService
			.getDictionaryEntry(query)
			.then(({ data }: any) => {
				setResult(data)
			})
			.catch((err: any) => console.log(err))
	}

	useEffect(() => {
		query !== "" && getDictionaryEntry()
	}, [query])

	return (
		<div className="pageContent" data-theme={appTheme} data-font={appFont}>
			<div className="wrapper">
				<Header />
				<SearchBar query={query} setQuery={setQuery} />
				<Results />
			</div>
		</div>
	)
}

export default MainPage
