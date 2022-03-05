import { useTranslation } from 'react-i18next';

import { paragraphs } from '../utils/content';
import Navbar from './Navbar';
import QA from './QA';

const Main: React.FC = () => {
	const { t } = useTranslation();
	const emailHref = `mailto:${t('supportEmail')}?subject=MFA/TOTP`;

	return (
		<div>
			<Navbar title={t('title')} />

			<main>
				<div className="main__container">
					<div className="text">
						<h2>{t('strongerSecurity')}</h2>

						{paragraphs.map(p => {
							return (
								<QA key={p.question} question={p.question} answer={p.answer} />
							);
						})}

						<h3>Having trouble?</h3>
						<p>
							<span>{t('contact')}&nbsp;</span>
							<a className="uui-link" href={emailHref}>
								{t('supportEmail')}
							</a>
						</p>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Main;
