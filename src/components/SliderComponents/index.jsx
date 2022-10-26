import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import notFound from "./assets/not-found.png";

import { Link } from "react-router-dom";
const POSTER_SIZE = "https://image.tmdb.org/t/p/w300";

const SliderComponents = ({ datas, clickAble, onClickHandler }) => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		responsive: [
			{
				breakpoint: 798,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
					infinite: true,
				},
			},
		],
	};

	return (
		<div className=" w-full bg-slate-50 sm:w-[75vw]">
			<Slider {...settings}>
				{datas?.map(data => (
					<div
						className={`bg-slate-50 px-2 ${
							!clickAble && "pointer-events-none"
						}`}
						key={data.id}
					>
						<Link to={`/movie/${data.id}`} onClick={onClickHandler}>
							<div className="bg-slate-50sm flex h-full w-full flex-col gap-4 sm:w-36 ">
								<img
									src={
										data?.profile_path
											? data.profile_path
												? POSTER_SIZE +
												  data.profile_path
												: notFound
											: data.poster_path
											? POSTER_SIZE + data.poster_path
											: notFound
									}
									alt={data?.id}
									className="h-full w-full
								rounded-xl bg-slate-50"
								/>
								<h2 className="justify-self-stretch text-center text-sm font-bold text-slate-900">
									{data?.name
										? data.name
										: data.original_title}
								</h2>
							</div>
						</Link>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default SliderComponents;
