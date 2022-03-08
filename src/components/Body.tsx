import { useTranslation } from 'react-i18next';

import MainMFA from './MainMFA';
import Navbar from './Navbar';

const Body: React.FC = () => {
	const { t } = useTranslation();
	const title = t('mfa.title');

	return (
		<div>
			<Navbar title={title} />
			<MainMFA />
		</div>
	);
};

export default Body;
