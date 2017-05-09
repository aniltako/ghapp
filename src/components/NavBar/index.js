import React, { Component } from "react";
import "./styles.css";
import logo from "../../img/logo.png";

class NavBar extends Component{

	render() {

		return (

				<div className="Navbar">
					<div className="Navbar-header-logo">
						<a href="/">
							<img src={logo} alt="Job Reignger" className="Nav-logo" />
						</a>
					</div>
				</div>
		);
	}
}

export default NavBar;
