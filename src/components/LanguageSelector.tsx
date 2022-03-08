import { useTranslation } from 'react-i18next';

import { languages } from '../utils/content';

const LanguageSelector = () => {
	const { i18n } = useTranslation();

	return (
		<div className="footer__language-selector">
			{Object.keys(languages).map(lng => (
				<span
					className="uui-link"
					key={lng}
					style={{
						fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'
					}}
					onClick={() => i18n.changeLanguage(lng)}
				>
					{languages[lng].nativeName}
				</span>
			))}
		</div>
	);
};

export default LanguageSelector;
