import React from "react";

// Library
import { Link } from "react-router-dom";

// Helper
import { navContent } from "../../helper";

const NavbarComponents = () => {
	return (
		<nav className="fixed bottom-0 left-0 z-20 h-fit w-full border-t border-slate-500 bg-slate-50 px-4 py-2 shadow-lg sm:hidden">
			<ul className="flex h-10  flex-wrap items-center justify-between  text-sm text-slate-900">
				{navContent.map(content => (
					<li key={content.navName} className="cursor-pointer">
						<Link to={content.navTo}>{content.navIcon}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavbarComponents;
