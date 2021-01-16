import React from "react";
import useLogRender from "../../utils/useLogPath";
import { Link } from "react-router-dom";
import "./index.css"
function Nav() {
	useLogRender();

	return (
		<nav>
			<ul>
				<li >Waste</li>
				<li>
					<Link to="/home">Home</Link>
				</li>
				<li>
					<Link to="/challenge">Game</Link>
				</li>
				<li>
					<Link to="/">Log In</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
