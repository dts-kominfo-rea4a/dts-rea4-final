// React
import React, { useEffect, useState, useRef } from "react";

import humanizeDuration from "humanize-duration";

import { useParams } from "react-router-dom";

// Api Fetch
import { getSingleMovie } from "../../helper";

import { Star, Clock, Calendar, VideoCamera } from "phosphor-react";
import notFound from "./assets/not-found.png";

const IMAGE_BASE_URL_ORIGINAL = `https://image.tmdb.org/t/p/original`;

const MovieDetailsPage = () => {
	const { movieId } = useParams();

	const pageLoaded = useRef(true);
	const [movie, setMovie] = useState([]);
	const [isError, setIsError] = useState(false);

	console.log();

	useEffect(() => {
		if (!pageLoaded.current) return;
		setIsError(false);

		try {
			const getDataMovies = async () => {
				const { data } = await getSingleMovie.get(`/${movieId}`);
				setMovie(data);
			};

			getDataMovies();
		} catch (error) {
			setIsError(true);
		} finally {
			pageLoaded.current = false;
		}
	}, [movieId]);

	return (
		<div
			className="flex h-screen w-full flex-col rounded-xl bg-slate-50
    bg-cover bg-center shadow-lg shadow-zinc-300 sm:ml-24 sm:w-fit sm:min-w-[75vw] xl:ml-60"
		>
			<div
				style={{
					backgroundImage: `linear-gradient(
				to top,
				rgba(15, 23, 42),
				rgba(0, 0, 0, 0)),
				url(${
					movie?.poster_path
						? IMAGE_BASE_URL_ORIGINAL + movie.poster_path
						: notFound
				})`,
				}}
				className="absolute top-0 left-0  h-2/4 w-full rounded-b-3xl bg-cover bg-no-repeat sm:hidden"
			>
				<div
					className="mt-20 flex h-full w-full flex-col items-center
				justify-center gap-2 text-center"
				>
					<h1 className="px-6 text-3xl font-bold  text-slate-50 ">
						{movie?.original_title}
					</h1>
					<div className="flex items-center justify-center gap-2">
						<Star size={32} color="#eab308" weight="fill" />
						<p className="text-xl font-bold text-slate-50">
							{movie?.vote_average?.toFixed(2)}
						</p>
					</div>
					<div className="flex w-full items-center justify-evenly text-xs text-slate-50">
						<div className="flex items-center ">
							<Calendar size={32} color="#0ea5e9" />
							<span>{movie?.release_date?.slice(0, 4)}</span>
						</div>
						<div className="flex items-center ">
							<Clock size={32} color="#0ea5e9" />
							<p>
								{humanizeDuration(movie?.runtime * 1000 * 60)}
							</p>
						</div>
						<div className="flex items-center gap-2">
							<VideoCamera size={32} color="#0ea5e9" />
							<p>
								{movie?.genres
									?.slice(0, 2)
									.map(data => data.name)
									.join(",")}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-0 left-0 mb-10 h-2/4 w-full items-center  rounded-t-3xl bg-slate-50">
				<div>
					<h1>Summary</h1>
					<p>{movie.overview}</p>
				</div>
				<div>Cast</div>
				<h1>Watch Trailer</h1>
			</div>
		</div>
	);
};

export default MovieDetailsPage;
