import { useTranslation } from 'react-i18next';

const Legal = () => {
	const { t } = useTranslation();
	const currentYear = new Date().getFullYear();

	return (
		<div>
			<span>&copy;{currentYear}&nbsp;</span>
			<span>{t('copyright')}</span>
		</div>
	);
};

export default Legal;
