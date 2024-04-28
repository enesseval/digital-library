import React from "react";

import logo from "../logo.png";

function Navbar() {
	return (
		<div className="w-full bg-custom-colorOne flex justify-center items-center font-pop">
			<h1 className="text-xl font-semibold">Digital Library</h1>
			<img className="h-24 sm:h-32" src={logo} alt="" />
		</div>
	);
}

export default Navbar;
