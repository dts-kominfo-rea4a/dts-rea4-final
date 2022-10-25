import React from "react";

import { useParams } from "react-router-dom";

const MovieDetails = () => {
	const { movieId } = useParams();
	console.log(movieId);
	return <div>Asu</div>;
};

export default MovieDetails;
