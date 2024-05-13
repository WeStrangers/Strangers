import { createI18n } from 'vue-i18n'

import ru from './locales/ru.json';
import en from './locales/en.json';

if (!('locale' in localStorage)) localStorage.locale = 'en';

function changeLocale(locale: string): void {
	localStorage.locale = locale;
	document.location.reload();
};

const i18n = createI18n({
	locale: localStorage.locale || 'ru',
	fallbackLocale: 'ru',
	messages: {
		ru, en,
	}
});

export { changeLocale };
export default i18n;