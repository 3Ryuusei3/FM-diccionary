import React, { useState } from "react"

import { ThemeContextType } from "./../../context/theme"
import { ThemeContext } from "./../../context/ThemeContext"

import dictionaryLogo from "./../../assets/images/logo.svg"
import arrowDown from "./../../assets/images/icon-arrow-down.svg"
import dmIcon from "./../../assets/images/icon-moon.svg"

export function Header() {
	const [fontModal, setFontModal] = useState(false)
	const { appTheme, changeTheme } = React.useContext(ThemeContext) as ThemeContextType

	const handleThemeToggle = () => {
		appTheme === "light" ? changeTheme("dark") : changeTheme("light")
	}

	const openFontModal = () => {
		setFontModal(true)
	}

	return (
		<header>
			<a href="#">
				<img src={dictionaryLogo} alt="logo" />
			</a>
			<div className="headerControls">
				<div className="fontPicker">
					<p>Sans Serif</p>
					<button onClick={() => openFontModal()}>
						<img src={arrowDown} alt="arrow down" />
					</button>
					<div className="fontSelector" style={fontModal ? { display: "block" } : { display: "none" }}>
						<button>
							<p style={{ fontFamily: "var(--sans-serif)" }}>Sans Serif</p>
						</button>
						<button>
							<p style={{ fontFamily: "var(--serif)" }}>Serif</p>
						</button>
						<button>
							<p style={{ fontFamily: "var(--mono)" }}>Mono</p>
						</button>
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
