import React from 'react';

const Navbar: React.FC<{ title: string }> = ({ title }) => {
	return (
		<nav>
			<h5>{title}</h5>
		</nav>
	);
};

export default Navbar;
