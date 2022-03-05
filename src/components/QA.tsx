import { useTranslation } from 'react-i18next';

export interface IQA {
	readonly question: string;
	readonly answer: string;
}

const QA: React.FC<IQA> = ({ question, answer }) => {
	const { t } = useTranslation();

	return (
		<>
			<h3>{t(question)}</h3>
			<p>{t(answer)}</p>
		</>
	);
};

export default QA;
