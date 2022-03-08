import { useTranslation } from 'react-i18next';

import { paragraphs } from '../utils/content';
import QA from './QA';

const MainMFA = () => {
	const { t } = useTranslation();
	const emailHref = `mailto:${t('mfa.supportEmail')}?subject=MFA/TOTP`;

	return (
		<main>
			<div className="main__container">
				<div className="text">
					<h2>{t('mfa.strongerSecurity')}</h2>

					{paragraphs.map(p => {
						return (
							<QA key={p.question} question={p.question} answer={p.answer} />
						);
					})}

					<h3>Having trouble?</h3>
					<p>
						<span>{t('mfa.contact')}&nbsp;</span>
						<a className="uui-link" href={emailHref}>
							{t('mfa.supportEmail')}
						</a>
					</p>
				</div>
			</div>
		</main>
	);
};

export default MainMFA;
