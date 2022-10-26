import React from "react";

// Components
import MovieComponents from "../MovieComponents";
import ArrowDownComponents from "../ArrowDownComponents";
import SearchBarComponents from "../SearchBarComponents";
import SpinnerComponents from "../SpinnerComponents";

const MovieListComponents = ({
	movieList,
	onClickHandler,
	headerTitle,
	searchPage,
	handleSearchTerm,
	pageLoaded,
	searchTerm,
}) => {
	return (
		<div
			className="flex min-h-screen w-full flex-col rounded-xl bg-slate-50
		shadow-lg shadow-zinc-300 sm:ml-24 sm:w-fit sm:min-w-[75vw] lg:ml-60"
		>
			<div className="container mb-12 h-5/6 w-full bg-slate-50 pt-8 sm:p-4 ">
				{searchPage ? (
					<>
						<SearchBarComponents
							handleSearchTerm={handleSearchTerm}
						/>
						{!searchTerm && (
							<h1 className="mt-4 text-center text-xl font-bold tracking-wide text-slate-800 transition-all ease-in-out sm:text-2xl">
								Search For Movie First
							</h1>
						)}
					</>
				) : (
					<h1 className="ml-6 text-xl font-bold tracking-wide text-slate-800 sm:text-2xl">
						{headerTitle}
					</h1>
				)}

				<div
					className="text-blue-gray-800 container mx-auto grid 
			 grid-cols-2 justify-between  gap-x-8 gap-y-4 p-5 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-4 lg:gap-x-10"
				>
					{movieList?.map((movie, index) => {
						return (
							<MovieComponents
								movie={movie}
								index={index}
								key={movie.id}
							/>
						);
					})}
				</div>
				{pageLoaded.current ? (
					<SpinnerComponents />
				) : (
					<ArrowDownComponents onClickHandler={onClickHandler} />
				)}
			</div>
		</div>
	);
};

export default MovieListComponents;
