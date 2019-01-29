import React from 'react';

const Header = () => {
	const header = "header";
	const headingMain = "heading--main";
	return (
		<div className={header}>
		<div className={headingMain}>
			<h1>Pok&eacute;dex</h1>
			<h3>Gotta catch 'em all</h3>
		</div>
	</div>
	)
}

export default Header;