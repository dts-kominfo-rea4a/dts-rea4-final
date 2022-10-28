// React
import React, { useEffect, useState, useRef } from "react";

// Helper
import { getMovies } from "../../helper";

// Components
import MovieListComponents from "../../components/MovieListComponents";
import ErrorComponents from "../../components/ErrorComponents";
import SpinnerComponents from "../../components/SpinnerComponents";

const HomePage = () => {
	const pageLoaded = useRef(true);
	const [moviesList, setMoviesList] = useState([]);
	const [page, setPage] = useState(1);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		if (!pageLoaded.current) return;
		setIsError(false);
		try {
			const getDataMovies = async () => {
				const { data } = await getMovies.get("popular", {
					params: { page: page },
				});

				setMoviesList(prev => [...prev, ...data.results]);
			};
			getDataMovies();
		} catch (error) {
			setIsError(true);
		} finally {
			pageLoaded.current = false;
		}
	}, [page]);

	const onClickHandler = () => {
		setPage(prev => prev + 1);
		pageLoaded.current = true;
	};
	if (moviesList.length === 0) return <SpinnerComponents />;

	if (isError) return <ErrorComponents />;

	return (
		<MovieListComponents
			onClickHandler={onClickHandler}
			movieList={moviesList}
			headerTitle="Featured Movie"
			pageLoaded={pageLoaded}
		/>
	);
};

export default HomePage;
