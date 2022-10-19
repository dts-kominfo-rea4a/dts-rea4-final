import SliderComponent from "./SliderComponent";

const HomePage = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-2 px-4 py-6 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="w-full bg-blue-500 aspect-[9/3] md:aspect-[8/3] rounded-lg overflow-hidden group relative hover:scale-95 transition-all duration-500">
          <div className="flex bg-slate-900/50 bg-[url('https://source.unsplash.com/600x200?programing')] w-full h-full bg-cover bg-center absolute group-hover:scale-110 transition-all duration-500 text-white">
            <div className="self-center mx-auto text-2xl font-bold text-white drop-shadow-lg bg-slate-900/30">
              DESSERT
            </div>
          </div>
        </div>
      </section>
      <section className="pb-32 pt-36 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-full mx-auto mb-16 text-center">
              <h4 className="mb-3 text-lg font-bold uppercase text-primary">
                Blog
              </h4>
              <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
                Tulisan Terkini
              </h2>
              <p className="font-medium text-md text-secondary lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid doloribus et laudantium!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl">
                <img
                  src="https://source.unsplash.com/360x200?programing"
                  alt="programing"
                  className="w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary"
                    >
                      Tips Belajar Programing
                    </a>
                  </h3>
                  <p className="mb-4 font-medium text-md text-secondary lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Molestiae, ducimus!
                  </p>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary hover:opacity-80"
                  >
                    Baca Slengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl">
                <img
                  src="https://source.unsplash.com/360x200?mechanical+keyboard"
                  alt="programing"
                  className="w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary"
                    >
                      Jenis Keyboard Mechanical
                    </a>
                  </h3>
                  <p className="mb-4 font-medium text-md text-secondary lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia dolorum odit facere?
                  </p>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary hover:opacity-80"
                  >
                    Baca Slengkapnya
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl">
                <img
                  src="https://source.unsplash.com/360x200?coffee"
                  alt="programing"
                  className="w-full"
                />
                <div className="px-6 py-8">
                  <h3>
                    <a
                      href="#"
                      className="block mb-3 text-xl font-semibold truncate text-dark hover:text-primary"
                    >
                      Menikmati Secangkir Coffee
                    </a>
                  </h3>
                  <p className="mb-4 font-medium text-md text-secondary lg:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Necessitatibus voluptatum dicta possimus!
                  </p>
                  <a
                    href="#"
                    className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary hover:opacity-80"
                  >
                    Baca Slengkapnya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
