import { FunctionComponent, useState } from "react"

import playBtn from "./../../assets/images/icon-play.svg"

interface resultsProps {
	result: any
}

export const Results: FunctionComponent<resultsProps> = ({ result }) => {
	console.log(result)
	return (
		<>
			{result !== undefined && (
				<div className="results">
					<div className="resultsHeader">
						<div>
							<p className="resultName">{result.word}</p>
							<p className="resultPhonetics">{result.phonetics[0].text}</p>
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
												<span key={elm} className="entrySynonyms">
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
						<a href={result.sourceUrls}>{result.sourceUrls}</a>
					</div>
				</div>
			)}
		</>
	)
}
