// Library
import axios from "axios";

// Assets
import { House, MagnifyingGlass, Ghost, Sword, Heart } from "phosphor-react";

const DEFAULT_URL = "https://api.themoviedb.org/3";
// https://api.themoviedb.org/3/search/movie?
const API_KEY = process.env.REACT_APP_API_TMDB;

const getMovies = axios.create({
	baseURL: `${DEFAULT_URL}/movie`,
	params: {
		api_key: API_KEY,
		page: "",
		with_genres: "",
	},
});

const getSingleMovie = axios.create({
	baseURL: `${DEFAULT_URL}/movie`,
	params: {
		movie_id: "",
		api_key: API_KEY,
		video: true,
	},
});

const getSearchedMovies = axios.create({
	baseURL: `${DEFAULT_URL}/search/movie/`,
	params: {
		api_key: API_KEY,
		query: "",
		page: "",
	},
});

const navContent = [
	{
		navTo: "/",
		navIcon: <House className="h-7 w-7 " />,
		navName: "Home",
	},
	{
		navTo: "/search",

		navIcon: <MagnifyingGlass className="h-7 w-7 " />,
		navName: "Search",
	},
	{
		navTo: "/horor",

		navIcon: <Ghost className="h-7 w-7 " />,
		navName: "Horor",
	},
	{
		navTo: "/action",

		navIcon: <Sword className="h-7 w-7 " />,
		navName: "Action",
	},
	{
		navTo: "/drama",

		navIcon: <Heart className="h-7 w-7 " />,
		navName: "Drama",
	},
];

export { getMovies, getSingleMovie, getSearchedMovies, navContent };
