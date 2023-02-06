import ThemeProvider from "./context/ThemeContext"

import "./styles/App.css"
import MainPage from "./pages/MainPage/MainPage"

export function App() {
	return (
		<ThemeProvider>
			<MainPage />
		</ThemeProvider>
	)
}
