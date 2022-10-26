import React, { useState, useRef, useEffect } from "react";

// Helper
import { getSearchedMovies } from "../../helper";

import MovieListComponents from "../../components/MovieListComponents";
import ErrorComponents from "../../components/ErrorComponents";

const SearchPage = () => {
	const pageLoaded = useRef(true);
	const [searchTerm, setSearchTerm] = useState("");
	const [moviesList, setMoviesList] = useState([]);
	const [page, setPage] = useState(1);
	const [isError, setIsError] = useState(false);

	const handleSearchTerm = searchValue => {
		setSearchTerm(searchValue);
		setPage(1);
		pageLoaded.current = true;
	};

	const onClickHandler = () => {
		setPage(prev => prev + 1);
		pageLoaded.current = true;
	};

	useEffect(() => {
		if (!pageLoaded.current || !searchTerm) return;
		setIsError(false);

		try {
			const getDataMovies = async () => {
				const { data } = await getSearchedMovies.get("/", {
					params: { query: searchTerm, page: page },
				});
				if (data.results.length === 0) {
					setIsError(true);
					throw new Error("Movie is not Found");
				}

				if (page === 1) {
					setMoviesList(data.results);
				} else {
					setMoviesList(prevState => [...prevState, ...data.results]);
				}
			};
			getDataMovies();
		} catch (error) {
			setIsError(true);
		} finally {
			pageLoaded.current = false;
		}
	}, [page, searchTerm]);

	if (isError) return <ErrorComponents />;

	return (
		<>
			<MovieListComponents
				searchPage
				handleSearchTerm={handleSearchTerm}
				movieList={moviesList}
				onClickHandler={onClickHandler}
				pageLoaded={pageLoaded}
				searchTerm={searchTerm}
			/>
		</>
	);
};

export default SearchPage;
