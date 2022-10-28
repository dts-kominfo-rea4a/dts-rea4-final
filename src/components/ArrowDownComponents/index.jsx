import React from "react";

// Assets
import { ArrowDownCircleIcon } from "@heroicons/react/24/solid";

const ArrowDownComponents = ({ onClickHandler }) => {
	return (
		<div
			className="flex  w-full items-center justify-center pb-4 "
			onClick={onClickHandler}
		>
			<ArrowDownCircleIcon className="h-7 w-7 animate-bounce cursor-pointer fill-cyan-500 drop-shadow-lg sm:h-12 sm:w-12" />
		</div>
	);
};

export default ArrowDownComponents;
