import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";

const Pagelinks = (props) => {

	return(
		<li >
			<NavLink to={`/${props.pageNumber}`}>{props.pageNumber}</NavLink>
		</li>
	)
}

export default Pagelinks;