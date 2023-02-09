import { FunctionComponent, useState } from "react"

import playBtn from "./../../assets/images/icon-play.svg"

interface resultsProps {
	result: any
	setQuery: any
	error: any
}

export const Results: FunctionComponent<resultsProps> = ({ result, setQuery, error }) => {
	return (
		<>
			{Object.keys(error).length > 0 ? (
				<div className="noResults">
					<p>😕</p>
					<p>No Definitions Found</p>
					<p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
				</div>
			) : Object.keys(result).length > 0 ? (
				<div className="results">
					<div className="resultsHeader">
						<div>
							<p className="resultName">{result.word}</p>
							{result.phonetics.length > 0 && <p className="resultPhonetics">{result.phonetics[0].text}</p>}
						</div>
						<img src={playBtn} alt="play button" />
					</div>
					<div className="resultsBody">
						{result.meanings.map((elm: any, idx: number) => {
							return (
								<div className="resultEntry" key={idx + result.word}>
									<p className="entryWordType">{elm.partOfSpeech}</p>
									<div className="resultDefinitionList">
										<p className="entrySubtitle">Meaning</p>
										<ul>
											{elm.definitions.map((elm: any, idx: any) => {
												return <li key={idx + elm.definition}>{elm.definition}</li>
											})}
										</ul>
									</div>
									{elm.synonyms.length > 0 && (
										<>
											<span className="entrySubtitle">Synonyms</span>
											{elm.synonyms.map((elm: any) => (
												<span onClick={() => setQuery(elm)} key={elm} className="entrySynonyms">
													{elm}
												</span>
											))}
										</>
									)}
								</div>
							)
						})}
					</div>
					<div className="resultsSource">
						<div className="divider"></div>
						<span>Source: </span>
						<div>
							{result.sourceUrls.map((elm: any) => {
								return (
									<div className="sourceItem" key={elm}>
										<span> -</span>
										<a href={elm}>{elm}</a>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			) : (
				<div className="noResults">
					<p>📖</p>
					<p>Welcome to Meanings!</p>
					<p>Find accurate and complete definitions of all the words you are looking for and more!</p>
				</div>
			)}
		</>
	)
}
