import { createI18n } from 'vue-i18n'

import ru from './locales/ru.json';
import en from './locales/en.json';

type availableLocales = 'ru' | 'en';
if (!('locale' in localStorage)) localStorage.locale = 'en';

function changeLocale(locale: availableLocales): void {
	localStorage.locale = locale;
	document.location.reload();
};

const i18n = createI18n({
	locale: localStorage.locale || 'en',
	fallbackLocale: 'en',
	messages: {
		ru, en,
	}
});

export { changeLocale };
export type { availableLocales };
export default i18n;