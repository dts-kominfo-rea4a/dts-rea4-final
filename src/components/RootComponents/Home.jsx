// React
import React, { useEffect, useState, useRef } from "react";

// Components
import HomeComponents from "./HomeComponents";
import ArrowDownComponents from "./ArrowDownComponents";

// Api Fetch
import { getMovies } from "../helper";

const Home = () => {
	const pageLoaded = useRef(true);
	const [moviesList, setMoviesList] = useState([]);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (!pageLoaded.current) return;
		try {
			pageLoaded.current = false;
			const getDataMovies = async () => {
				const { data } = await getMovies.get("popular", {});

				setMoviesList(prev => {
					if (prev.length === data.results.length) return prev;
					return data.results;
				});
			};
			getDataMovies();
			setPage(prev => prev + 1);
		} catch (error) {
			console.log(error);
		}
	}, []);

	if (moviesList.length === 0) return <h1>loading</h1>;

	return (
		<div className="container min-h-screen w-full rounded-xl bg-slate-50 pt-2 shadow-lg shadow-zinc-300 sm:m-4 sm:w-5/6 lg:w-2/3">
			<h1 className="ml-6 text-2xl font-bold tracking-wide text-slate-800 sm:text-2xl">
				Featured Movies
			</h1>
			<div
				className="text-blue-gray-800 gap--6 container mx-auto 
			 grid grid-cols-2 justify-between gap-y-4 gap-x-10 p-5 sm:grid-cols-3 sm:gap-x-4 xl:grid-cols-4 xl:gap-x-8"
			>
				{moviesList?.map((movie, index) => (
					<HomeComponents
						movie={movie}
						index={index}
						key={movie.id}
					/>
				))}
			</div>
			<ArrowDownComponents />
		</div>
	);
};

export default Home;
