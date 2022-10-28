// React
import React, { useEffect, useState, useRef } from "react";

import humanizeDuration from "humanize-duration";
import { useParams } from "react-router-dom";

import SliderComponents from "../../components/SliderComponents";
import ErrorComponents from "../../components/ErrorComponents";

// Helper
import { getSingleMovie, IMAGE_BASE_URL_ORIGINAL } from "../../helper";

// Assets
import { Star, Clock, Calendar, VideoCamera } from "phosphor-react";
import notFound from "../../assets/not-found.png";

const MovieDetailsPage = () => {
	const { movieId } = useParams();

	const pageLoaded = useRef(true);
	const [movie, setMovie] = useState({});
	const [isError, setIsError] = useState(false);

	const onClickHandler = () => (pageLoaded.current = true);

	useEffect(() => {
		if (!pageLoaded.current) return;
		setIsError(false);

		try {
			const getDataMovies = async () => {
				const { data } = await getSingleMovie.get(`/${movieId}`);
				const credit = await getSingleMovie.get(`/${movieId}/credits`);
				const similar = await getSingleMovie.get(`/${movieId}/similar`);
				const videos = await getSingleMovie.get(`/${movieId}/videos`);

				const cast = credit?.data?.cast?.slice(0, 10);
				const similarMovie = similar?.data?.results;
				const video = videos?.data?.results?.filter(
					source => source.site === "YouTube"
				)[0];

				setMovie({
					...movie,
					movie: data,
					cast,
					similarMovie,
					video,
				});
			};

			getDataMovies();
		} catch (error) {
			setIsError(true);
		} finally {
			pageLoaded.current = false;
		}
	}, [movieId, movie]);

	if (isError) return <ErrorComponents />;

	return (
		<div
			className="flex h-full w-full flex-col rounded-xl bg-slate-50
    bg-cover bg-center shadow-lg shadow-zinc-300 sm:ml-32 sm:mr-6 sm:w-fit sm:min-w-[75vw] sm:pt-4 lg:mr-12 lg:ml-60 lg:min-h-screen"
		>
			<div
				style={{
					backgroundImage: `linear-gradient(
				to top,
				rgba(15, 23, 42),
				rgba(0, 0, 0, 0)),
				url(${
					movie?.movie?.poster_path
						? IMAGE_BASE_URL_ORIGINAL + movie.movie.poster_path
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
						{movie?.movie?.original_title}
					</h1>
					<div className="flex items-center justify-center gap-2">
						<Star size={32} color="#eab308" weight="fill" />
						<p className="text-xl font-bold text-slate-50">
							{movie?.movie?.vote_average?.toFixed(2)}
						</p>
					</div>
					<div className="mt-2 flex w-full items-center justify-evenly text-xs text-slate-50">
						<div className="flex h-full w-1/3 flex-col items-center justify-start">
							<Calendar size={32} color="#0ea5e9" />
							<span>
								{movie?.movie?.release_date?.slice(0, 4)}
							</span>
						</div>
						<div className="flex h-full w-1/3 flex-col items-center justify-start">
							<Clock size={32} color="#0ea5e9" />
							<p>
								{humanizeDuration(
									movie?.movie?.runtime * 1000 * 60
								)}
							</p>
						</div>
						<div className="flex h-full w-1/3 flex-col items-center justify-start">
							<VideoCamera size={32} color="#0ea5e9" />
							<p>
								{movie?.movie?.genres
									?.slice(0, 2)
									.map(data => data.name)
									.join(",")}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundImage: `linear-gradient(
				to top,
				rgba(15, 23, 42),
				rgba(0, 0, 0, 0)),
				url(${
					movie?.movie?.backdrop_path
						? IMAGE_BASE_URL_ORIGINAL + movie.movie.backdrop_path
						: notFound
				})`,
				}}
				className="relative hidden h-3/4 w-full rounded-3xl bg-cover bg-no-repeat sm:block"
			>
				<div className="absolute -bottom-20 left-0 ml-10 aspect-auto w-44 rounded-3xl shadow-2xl">
					<img
						src={
							movie?.movie?.backdrop_path &&
							IMAGE_BASE_URL_ORIGINAL + movie?.movie?.poster_path
						}
						alt={movie?.movie?.id}
						className="rounded-3xl"
					/>
				</div>
				<div
					className="mt-32 flex flex-col
				items-center justify-center gap-2 text-center"
				>
					<h1 className="px-6 text-3xl font-bold  text-slate-50 ">
						{movie?.movie?.original_title}
					</h1>
					<div className="flex items-center justify-center gap-2">
						<Star size={32} color="#eab308" weight="fill" />
						<p className="text-xl font-bold text-slate-50">
							{movie?.movie?.vote_average?.toFixed(2)}
						</p>
					</div>
					<div className="mb-2 flex w-2/4 items-center justify-evenly text-xs text-slate-50">
						<div className="flex h-full w-1/3 flex-col items-center justify-start">
							<Calendar size={32} color="#0ea5e9" />
							<span>
								{movie?.movie?.release_date?.slice(0, 4)}
							</span>
						</div>
						<div className="flex h-full w-1/3 flex-col items-center justify-start">
							<Clock size={32} color="#0ea5e9" />
							<p>
								{humanizeDuration(
									movie?.movie?.runtime * 1000 * 60
								)}
							</p>
						</div>
						<div className="flex h-full w-1/3 flex-col items-center justify-start">
							<VideoCamera size={32} color="#0ea5e9" />
							<p>
								{movie?.movie?.genres
									?.slice(0, 2)
									.map(data => data.name)
									.join(",")}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-96 mb-10 flex h-2/4 flex-col  items-center gap-5 rounded-t-3xl bg-slate-50 p-8 pt-32 text-slate-900 sm:mt-20 sm:w-fit sm:pt-0">
				<div className="w-full">
					<h1 className="mb-2 text-lg font-bold">Summary</h1>
					<p className="text-base">{movie?.movie?.overview}</p>
				</div>
				<div className="rounded-full bg-cyan-500 py-4 px-8 text-slate-50">
					<a
						href={`https://www.youtube.com/watch?v=${movie?.video?.key}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Watch Video
					</a>
				</div>
				<div className="w-full ">
					<h1 className="mb-4 text-lg font-bold">The Cast</h1>
					<SliderComponents datas={movie.cast} />
				</div>
				<div className="w-full bg-slate-50 ">
					<h1 className="mb-4 text-lg font-bold">
						You Would Also Like
					</h1>
					<SliderComponents
						datas={movie.similarMovie}
						clickAble
						onClickHandler={onClickHandler}
					/>
				</div>
			</div>
		</div>
	);
};

export default MovieDetailsPage;
