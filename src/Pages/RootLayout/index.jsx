import { Outlet } from "react-router-dom";

import { auth } from "../../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import SideBarComponents from "../../components/SidebarComponents";
import NavbarComponents from "../../components/NavbarComponents";
import HeaderComponents from "../../components/HeaderComponents";

import SpinnerComponents from "../../components/SpinnerComponents";
import ErrorComponents from "../../components/ErrorComponents";

function RootLayout() {
	const [user, loading, error] = useAuthState(auth);

	if (loading) return <SpinnerComponents />;
	if (error) return <ErrorComponents />;
	return (
		<>
			<SideBarComponents user={user} />
			<HeaderComponents user={user} />
			<NavbarComponents />
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
