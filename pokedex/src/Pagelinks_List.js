import React from 'react';
import Pagelinks from './Pagelinks';

const PagelinksList = ({pageInfo}) => {
	if(!pageInfo){
		return <div>Loading...</div>
	}
	const links = [];
	//I'm not sure of a better way to iterate over this, but I feel like it
	//could be revisited to find out if there's time
	function createPages() {
		for(let i = 1; i <= pageInfo.last_page; i++){
			links.push(<Pagelinks key={i} pageNumber={i} />);
		}
	}
	createPages();
	console.log(links);
	return (
		<div>
			{links}
		</div>
	)
}

export default PagelinksList;