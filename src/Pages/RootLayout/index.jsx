import { Outlet } from "react-router-dom";

import SideBarComponents from "../../components/SidebarComponents";
import NavbarComponents from "../../components/NavbarComponents";
import HeaderComponents from "../../components/HeaderComponents";

function RootLayout() {
	return (
		<>
			<SideBarComponents />
			<HeaderComponents />
			<NavbarComponents />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
