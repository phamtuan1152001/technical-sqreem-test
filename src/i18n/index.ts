import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import vi from './locales/vi'

const LANGUAGE_STORAGE_KEY = 'app_language'
const SUPPORTED_LANGUAGES = ['vi', 'en'] as const

const resources = {
	en: { translation: en },
	vi: { translation: vi },
}

const getInitialLanguage = () => {
	if (typeof window === 'undefined') return 'vi'

	const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
	if (storedLanguage && SUPPORTED_LANGUAGES.includes(storedLanguage as (typeof SUPPORTED_LANGUAGES)[number])) {
		return storedLanguage
	}

	return 'vi'
}

void i18n.use(initReactI18next).init({
	resources,
	lng: getInitialLanguage(),
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
})

i18n.on('languageChanged', (language) => {
	if (typeof window === 'undefined') return
	window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
})

export default i18n
export { LANGUAGE_STORAGE_KEY, SUPPORTED_LANGUAGES }
