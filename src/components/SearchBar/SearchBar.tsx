import { FunctionComponent, useState } from "react"
import searchIcon from "./../../assets/images/icon-search.svg"

interface searchBarProps {
	query: string
	setQuery: any
}

export const SearchBar: FunctionComponent<searchBarProps> = ({ query, setQuery }) => {
	const [search, setSearch] = useState("")

	const handleSearch = (e: any) => {
		setSearch(e.target.value)
	}

	const handleQuery = (e: any) => {
		if (e.key === "Enter") setQuery(search)
		else handleSearch(e)
	}

	return (
		<div className="searchBar">
			<div>
				<input type="text" value={search} onChange={handleSearch} onKeyDown={handleQuery} placeholder="Search for any word..." />
				<img src={searchIcon} alt="search icon" />
			</div>
		</div>
	)
}
