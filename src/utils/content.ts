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
		question: 'mfa.whatIsMFA',
		answer: 'mfa.mfaIs'
	},
	{
		question: 'mfa.whyImportant',
		answer: 'mfa.imiportantBecause'
	},
	{
		question: 'mfa.whatIsTOTP',
		answer: 'mfa.totpIs'
	},
	{
		question: 'mfa.whatAppsSupported',
		answer: 'mfa.supportedApps'
	}
];
