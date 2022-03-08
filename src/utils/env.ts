export const getActiveApp = () => {
	return process.env.REACT_APP_ACTIVE_APP ?? 'mfa';
};
