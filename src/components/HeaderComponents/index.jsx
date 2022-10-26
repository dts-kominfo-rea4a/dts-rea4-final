import React, { useState, useEffect } from "react";

// Library
import { Link } from "react-router-dom";

// Assets
import { Popcorn, UserCircle } from "phosphor-react";

const HeaderComponents = ({ user }) => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	const handleScroll = () => {
		const currentScrollPos = window.scrollY;

		if (currentScrollPos > prevScrollPos) {
			setVisible(false);
		} else {
			setVisible(true);
		}

		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	});

	return (
		<div
			className={`sticky w-full border-b border-slate-500 shadow-lg transition-all duration-500 ease-in-out md:hidden  ${
				visible ? "top-0" : ""
			} z-20`}
		>
			<div className="flex  items-center justify-between p-4">
				<div>
					<Link to={"/"}>
						<Popcorn size={28} color="#0ea5e9" weight="duotone" />
					</Link>
				</div>
				<div>
					<button
						type="button"
						data-dropdown-toggle="language-dropdown-menu"
						className="inline-flex cursor-pointer items-center justify-center rounded p-2 text-sm text-gray-500 hover:rounded-full hover:bg-cyan-500 hover:text-slate-50 "
					>
						<UserCircle size={28} color="#0ea5e9" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeaderComponents;
