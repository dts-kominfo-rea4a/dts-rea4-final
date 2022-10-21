import { getSuggestedQuery } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import useBooksStore, {
  selectFetchBooks,
  selectBooks,
  selectIsLoading,
} from "../stores/book";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");

  const fetchBook = useBooksStore(selectFetchBooks);
  const dataBooks = useBooksStore(selectBooks);
  const isLoading = useBooksStore(selectIsLoading);

  useEffect(() => {
    fetchBook(query);
  }, []);
  //   console.log(dataBooks.items.length);
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
      {isLoading ? (
        ""
      ) : (
        <>
          <section className="pt-3 pb-10 bg-slate-100">
            <div className="">
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
                    type="search"
                    onChange={searchInputHandle}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Cari
                  </button>
                </div>
              </form>
              <div className="px-6 py-3 italic font-semibold">
                Menampilkan dari 10 total {dataBooks.totalItems} hasil
                penelusuran...
              </div>
            </div>
          </section>
          <section className="pt-6 pb-32 bg-slate-100">
            <div className="">
              <div className="flex flex-wrap">
                {dataBooks.items.map((book) => (
                  <div className="w-full px-4 md:w-1/3 lg:w-1/4">
                    <div className="mb-10 overflow-hidden bg-white shadow-lg rounded-xl">
                      <img
                        src="https://source.unsplash.com/360x600?programing"
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
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Molestiae, ducimus!
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
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SearchPage;
