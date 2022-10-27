const Footer = () => {
  return (
    <div className="bg-slate-800 px-[100px] py-10">
      <div className="grid lg:grid-cols-3 gap-5 sm:gap-2">
        <div className="flex flex-col mt-0">
          <h1 className="font-bold text-slate-400 text-6xl mb-2">
            Lihat Cuaca
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-slate-400 mb-2">RESOURCES</h1>
          <h3 className="font-semibold lg:text-2xl text-slate-500">
            <a href="https://www.openweathermap.org" target="_blank">
              OpenWeatherMap
            </a>
          </h3>
          <h3 className="font-semibold lg:text-2xl text-slate-500">
            <a href="https://www.leaftletjs.com" target="_blank">
              Leaftlet
            </a>
          </h3>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl text-slate-400 mb-2">
            &copy; 2022
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
