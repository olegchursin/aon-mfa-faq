import { useTranslation } from 'react-i18next';

import { languages } from '../utils/content';

const Footer: React.FC = () => {
	const { t, i18n } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div className="footer__container">
				<div className="footer__logo">
					<img
						src="https://assets.aoncyberplatform.com/branding/aon-logo-2021.svg"
						alt="Aon Logo"
						width={60}
						height={23}
					/>

					<div>
						<span>&copy;{currentYear}&nbsp;</span>
						<span>{t('copyright')}</span>
					</div>
				</div>

				<div className="footer__language-links">
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
			</div>
		</footer>
	);
};

export default Footer;
