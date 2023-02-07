import axios from "axios"

class DictionaryService {
	api: any
	constructor() {
		this.api = axios.create({
			baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en/",
		})
	}

	getDictionaryEntry(word: any) {
		return this.api.get(`/${word}`)
	}
}

const dictionaryService = new DictionaryService()

export default dictionaryService
