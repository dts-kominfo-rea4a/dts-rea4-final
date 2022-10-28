import React from "react";

// Library
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

// Pages
import RootLayout from "./Pages/RootLayout";
import Homepage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/Loginpage";

// Components
import ErrorComponents from "./components/ErrorComponents";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			errorElement={<ErrorComponents />}
			element={<RootLayout />}
		>
			<Route index element={<Homepage />} />
			<Route path="/search" element={<SearchPage />} />
			<Route path="/horor" element={<SearchPage />} />
			<Route path="/movie/:movieId" element={<MovieDetailsPage />} />
			<Route path="/signup" element={<SignUpPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
