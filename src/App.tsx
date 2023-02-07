import ThemeProvider from "./context/ThemeContext"
import FontProvider from "./context/FontContext"

import "./styles/App.css"
import MainPage from "./pages/MainPage/MainPage"

export function App() {
	return (
		<ThemeProvider>
			<FontProvider>
				<MainPage />
			</FontProvider>
		</ThemeProvider>
	)
}
