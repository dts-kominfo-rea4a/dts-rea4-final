import { useState } from "react";
import Data from "../Data";
import Footer from "./Footer";
import useFetch from "./useFetch";

const Content = () => {
  const apiKey = "9f0afe1eafb8b0286ee1a59305c569a6";
  const [value, setValue] = useState(null);

  const { data, loading, error } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${value},{state code}&appid=${apiKey}`
  );

  return (
    <div className="h-full">
      <div className="w-screen h-screen bg-slate-800 flex flex-col justify-center items-center">
        <h1 className="font-bold text-8xl text-slate-400 text-center">
          Lihat Cuaca
        </h1>
        <h3 className="font-semibold text-2xl text-slate-500 mt-4 text-center">
          Get a Weather Information With Lihat Cuaca.
        </h3>
      </div>
      <div className="bg-slate-900 lg:px-[100px] py-20 px-[20px]">
        <div className="w-full bg-slate-700 px-2 flex items-center rounded-lg">
          <input
            type="text"
            placeholder="search city..."
            className="w-full border-none px-2 py-3 outline-none bg-slate-700 text-slate-300 rounded-md"
            onInput={(e) => {
              setValue(e.target.value);
            }}
            value={value}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            className="fill-slate-400"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
        {error && (
          <div className="w-full my-2">
            <h1 className="font-semibold text-slate-500 text-2xl">{error}</h1>
          </div>
        )}
        {loading && (
          <div className="w-full">
            <h1 className="text-slate-400 text-2xl font-semibold">
              Loading...
            </h1>
          </div>
        )}
        {data && <Data data={data} />}
      </div>
      <Footer />
    </div>
  );
};

export default Content;
