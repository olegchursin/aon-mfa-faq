import { useTranslation } from 'react-i18next';

import { getActiveApp } from '../utils/env';
import MainMFA from './MainMFA';
import Navbar from './Navbar';

const Body: React.FC = () => {
	const { t } = useTranslation();
	const activeApp = getActiveApp();
	const title = t(`${activeApp}.title`);

	return (
		<div>
			<Navbar title={title} />
			<MainMFA />
		</div>
	);
};

export default Body;
