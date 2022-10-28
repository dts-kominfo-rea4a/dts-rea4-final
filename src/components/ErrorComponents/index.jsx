import React from "react";

// Library
import { Link } from "react-router-dom";

// Assets
import { SmileySad } from "phosphor-react";

const ErrorComponents = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-8">
			<SmileySad size={300} color="#0ea5e9" className="animate-bounce" />
			<div className=" text-center tracking-widest">
				<span className="text-xl text-slate-900 ">
					Sorry, We couldn't find what you are looking for!
				</span>
			</div>

			<button onClick={() => window.location.reload()}>
				<Link
					to={"/"}
					className=" rounded-full border-4 border-cyan-500 bg-slate-300 px-4 py-2 text-xl font-bold text-slate-100 hover:bg-transparent hover:text-slate-900"
				>
					Go back
				</Link>
			</button>
		</div>
	);
};

export default ErrorComponents;
