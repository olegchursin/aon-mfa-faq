import LanguageSelector from './LanguageSelector';
import Legal from './Legal';
import Logo from './Logo';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="footer__container">
				<div className="footer__start">
					<Logo />
					<LanguageSelector />
				</div>

				<Legal />
			</div>
		</footer>
	);
};

export default Footer;
