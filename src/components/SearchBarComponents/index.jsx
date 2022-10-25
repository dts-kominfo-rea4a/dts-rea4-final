import React, { useState, useEffect, useRef } from "react";

// Assets
import { Binoculars } from "phosphor-react";

const SearchBarComponents = ({ handleSearchTerm }) => {
	const [searchValue, setSearchValue] = useState("");
	const pageLoadedFirstTime = useRef(true);
	const pageLoaded = useRef(true);

	useEffect(() => {
		if (pageLoadedFirstTime.current) {
			pageLoadedFirstTime.current.focus();
			pageLoadedFirstTime.current = false;
			return;
		}

		if (!pageLoaded.current) return;
		pageLoaded.current = false;

		const timer = setTimeout(() => {
			handleSearchTerm(searchValue);
		}, 500);

		return () => clearTimeout(timer);
	}, [searchValue, handleSearchTerm]);

	const handleSearchValue = e => {
		pageLoaded.current = true;
		setSearchValue(e.currentTarget.value);
	};

	return (
		<form className="relative rounded-full">
			<label
				htmlFor="default-search"
				className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Search
			</label>
			<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Binoculars size={32} color="#0ea5e9" />
			</div>
			<input
				type="search"
				id="default-search"
				className="mr-6 block w-full rounded-full border border-zinc-300 bg-slate-300 p-4 pl-16 text-sm font-bold text-slate-700 placeholder:text-slate-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
				placeholder="Search Movie"
				value={searchValue}
				onChange={handleSearchValue}
				required
				ref={pageLoadedFirstTime}
			/>
			<button
				type="submit"
				className=" absolute right-2.5 bottom-2.5 rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-slate-50 hover:border-slate-500 hover:bg-slate-50 hover:text-slate-900 hover:ring hover:ring-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
			>
				Search
			</button>
		</form>
	);
};

export default SearchBarComponents;
