import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";

const Pagelinks = (props) => {

//console.log(props);
	return(
		<li><Link to={`/${props.pageNumber}`}>{props.pageNumber}</Link></li>
	)
}

export default Pagelinks;