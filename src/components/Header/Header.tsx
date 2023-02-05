import dictionaryLogo from "./../../assets/images/logo.svg"
import arrowDown from "./../../assets/images/icon-arrow-down.svg"
import dmIcon from "./../../assets/images/icon-moon.svg"

function Header() {
	return (
		<header>
			<a href="#">
				<img src={dictionaryLogo} alt="logo" />
			</a>
			<div className="headerControls">
				<div className="fontPicker">
					<p>Sans Serif</p>
					<button>
						<img src={arrowDown} alt="arrow down" />
					</button>
				</div>
				<div className="dmControls">
					<div className="dmToggle">
						<div className="dmHandler"></div>
					</div>
					<img src={dmIcon} alt="moon icon" />
				</div>
			</div>
		</header>
	)
}

export default Header
