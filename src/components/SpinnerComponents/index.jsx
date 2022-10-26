import React from "react";

// assets
import { Spinner } from "phosphor-react";

const SpinnerComponents = () => {
	return (
		<div className="flex items-center justify-center">
			<Spinner
				size={32}
				color="#0ea5e9"
				className="mr-2 h-8 w-8 animate-spin "
			/>
		</div>
	);
};

export default SpinnerComponents;
