import React from 'react';
import { NavLink } from "react-router-dom";

const Pagelinks = (props) => {
	const btn = "btn";
	return(
		<li>
			<NavLink 
				className={btn}
				page-tag={props.pageNumber}
				onClick={props.onClick} 
				to={`/page/${props.pageNumber}`}>
					{props.pageNumber}
			</NavLink>
		</li>
	)
}

export default Pagelinks;