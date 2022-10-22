import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputHandle = (event) => {
    setSearchQuery(event.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <>
      <section className="pt-24 pb-10 bg-slate-100">
        <div className="w-full px-4 mb-8">
          <div className="max-w-full mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl text-primary">
              GoBooks
            </h2>
          </div>
        </div>
        <form className="mx-6" onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              onChange={searchInputHandle}
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Search Comics, Romance..."
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
        <div className="w-full px-4 py-8">
          <div className="max-w-full mx-auto mb-16 text-center">
            <p className="max-w-xl mx-auto font-medium text-md text-secondary lg:text-lg">
              GoBooks is a service that searches the full text of books and
              magazines that Google has scanned, converted to text using optical
              character recognition, and stored in its digital database.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
