import React from 'react';
import { NavLink } from "react-router-dom";

const Pagelinks = (props) => {

	return(
		<li>
			<NavLink 
				page-tag={props.pageNumber}
				onClick={props.onClick} 
				to={`/page/${props.pageNumber}`}>
					{props.pageNumber}
			</NavLink>
		</li>
	)
}

export default Pagelinks;