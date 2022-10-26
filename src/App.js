import React from "react";

import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

// !Routes Layout
import RootLayout from "./Pages/RootLayout";

import Homepage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import ErrorComponents from "./components/ErrorComponents";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/Loginpage";

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
