import React from "react";

// Library
import { Link } from "react-router-dom";

// Assets
import { StarIcon } from "@heroicons/react/24/solid";
import notFound from "../../assets/not-found.png";

// BASE URL
import { IMAGE_BASE_URL, IMAGE_BASE_URL_ORIGINAL } from "../../helper";

const HomeMovieListComponents = ({ movie, index }) => {
	let imageIndex =
		index === 0
			? `${IMAGE_BASE_URL_ORIGINAL}/${movie?.backdrop_path}`
			: `${IMAGE_BASE_URL}/${movie?.poster_path}`;

	return (
		<div
			className="group relative flex aspect-square h-36 cursor-pointer items-center justify-center overflow-hidden rounded-xl shadow-lg shadow-slate-400 first:col-span-full first:row-span-2 first:aspect-auto first:h-80 sm:h-48 sm:first:h-96 xl:h-56"
			key={movie?.id}
		>
			<div
				style={{
					backgroundImage: `linear-gradient(
				    to top,
				    rgba(0, 0, 0, 0.80),
				    rgba(0, 0, 0, 0)
				),
				url(${movie?.poster_path ? imageIndex : notFound})`,
				}}
				className="absolute h-full w-full transform bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-150"
			>
				<Link
					to={`/movie/${movie.id}`}
					className="flex h-full w-full scale-100 transform flex-col items-center justify-center break-normal  p-12 text-center text-slate-100 transition-all duration-500 ease-in-out group-hover:scale-100"
				>
					<h1 className="text-sm font-bold   ">
						{movie?.original_title}
					</h1>
					<div className="flex transform items-center justify-center opacity-100 transition-all duration-500 ease-in-out sm:opacity-0 sm:group-hover:opacity-100">
						<StarIcon className="h-6 w-6 text-yellow-300" />
						<span className="ml-1 text-xs font-normal">
							{movie?.vote_average}/10
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default HomeMovieListComponents;
