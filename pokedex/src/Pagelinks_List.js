import React from 'react';
import Pagelinks from './Pagelinks';

const PagelinksList = ({pageInfo}) => {
	if(!pageInfo){
		return <div>Loading...</div>
	}
	console.log(pageInfo.last_page);
	const links = [];
	function createPages() {
		for(let i = 1; i <= pageInfo.last_page; i++){
			links.push(<Pagelinks key={i} pageNumber={i} />);
		}
	}
	createPages();
	console.log(links)
	return (
		<div>
			{links}
		</div>
	)
}

export default PagelinksList;