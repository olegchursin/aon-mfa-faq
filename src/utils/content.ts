import { IQA } from '../components/QA';

export const languages = {
	en: { nativeName: 'English' },
	de: { nativeName: 'Deutsch' },
	es: { nativeName: 'Español' },
	fr: { nativeName: 'Français' },
	it: { nativeName: 'Italiano' },
	nl: { nativeName: 'Nederlands' }
};

export const paragraphs: IQA[] = [
	{
		question: 'whatIsMFA',
		answer: 'mfaIs'
	},
	{
		question: 'whyImportant',
		answer: 'imiportantBecause'
	},
	{
		question: 'whatIsTOTP',
		answer: 'totpIs'
	},
	{
		question: 'whatAppsSupported',
		answer: 'supportedApps'
	}
];
