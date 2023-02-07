import React, { useState } from "react"

import { ThemeContextType } from "./../../context/theme"
import { ThemeContext } from "./../../context/ThemeContext"
import { FontContextType } from "./../../context/font"
import { FontContext } from "./../../context/FontContext"

import { headerFonts } from "../../const/headerFonts"
import dictionaryLogo from "./../../assets/images/logo.svg"
import arrowDown from "./../../assets/images/icon-arrow-down.svg"
import dmIcon from "./../../assets/images/icon-moon.svg"

export function Header() {
	const [fontModal, setFontModal] = useState(false)
	const { appTheme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType
	const { appFont, changeFont } = React.useContext(FontContext) as FontContextType

	const handleThemeToggle = () => {
		appTheme === "light" ? changeTheme("dark") : changeTheme("light")
	}

	const openFontModal = () => {
		setFontModal(true)
	}

	const handleAppFont = (font: any) => {
		changeFont(font)
		setFontModal(false)
	}

	return (
		<header>
			<a href="#">
				<img src={dictionaryLogo} alt="logo" />
			</a>
			<div className="headerControls">
				<div className="fontPicker">
					<div className="fontButton" onClick={() => openFontModal()}>
						<p>{appFont}</p>
						<img src={arrowDown} alt="arrow down" />
					</div>
					<div className="fontSelector" style={fontModal ? { display: "block" } : { display: "none" }}>
						{headerFonts.map((elm: any) => {
							return (
								<button key={elm.var} onClick={() => handleAppFont(elm.name)}>
									<p style={{ fontFamily: `var(--${elm.var})` }}>{elm.name}</p>
								</button>
							)
						})}
					</div>
				</div>
				<div className="dmControls">
					<label className="dmSwitch">
						<input type="checkbox" onChange={handleThemeToggle} />
						<span className="slider round"></span>
					</label>
					<img src={dmIcon} alt="moon icon" />
				</div>
			</div>
		</header>
	)
}
