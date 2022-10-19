import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Clock } from "react-feather";

const featuredProducts = [
  "https://source.unsplash.com/900x300?cook",
  "https://source.unsplash.com/900x300?tech",
  "https://source.unsplash.com/900x300?book",
];

let count = 0;
let slideInterval;
const SliderComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % featuredProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = featuredProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div ref={slideRef} className="w-full select-none relative">
      <img
        src={featuredProducts[currentIndex]}
        className="object-cover h-48 sm:h-60 md:h-80 lg:h-96 w-full"
        alt=""
      />

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <ChevronLeft size={30} />
        </button>
        <button
          className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <ChevronRight size={30} />
        </button>
      </div>
      <div className="absolute w-full bottom-0 transform py-3 px-3 mb-3 text-center  bg-slate-700/40">
        <h3 className="font-bold text-3xl text-white drop-shadow-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis neque
          voluptatem nam explicabo dolor nihil?
        </h3>
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center font-semibold text-white text-sm drop-shadow-md">
            <Clock className="w-6 h-6" /> 1jam 30 menit
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
