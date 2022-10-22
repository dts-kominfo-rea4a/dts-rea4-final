import { useEffect, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import useBooksStore, {
  selectFetchBooks,
  selectBooks,
  selectIsLoading,
} from "../stores/book";
import noimage from "../noimage.png";
import Paginate from "../components/Paginate";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  const page = searchParams.get("page");

  const fetchBook = useBooksStore(selectFetchBooks);
  const dataBooks = useBooksStore(selectBooks);
  const isLoading = useBooksStore(selectIsLoading);

  useEffect(() => {
    fetchBook(query, page);
    document.title = `Search result for: ${query}`;
  }, [query, page]);
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
      <section className="py-3 bg-slate-100">
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
                onChange={searchInputHandle}
                type="search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder={query}
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
          <div className="px-6 py-2 italic font-semibold">
            {isLoading
              ? "Loading ..."
              : `Showing  ${dataBooks.items?.length} of ${dataBooks?.totalItems} total result...`}
          </div>
        </div>
      </section>
      <section className="py-2 bg-slate-100">
        <div className="flex flex-wrap">
          {dataBooks.items?.map((book) => (
            <div
              key={book.id}
              className="flex flex-col w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 group"
            >
              <div className="flex-1 mb-10 overflow-hidden bg-white shadow-lg rounded-xl">
                <Link to={`/details/${book.id}`}>
                  <img
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : noimage
                    }
                    alt="img"
                    className="w-full"
                  />
                  <div className="px-6 py-2">
                    <h3>
                      <div className="block mb-3 font-semibold truncate text-md text-slate-900 group-hover:text-primary">
                        {book.volumeInfo.title}
                      </div>
                    </h3>
                    <p className="mb-4 text-xs text-slate-500">
                      {book.volumeInfo.authors
                        ? book.volumeInfo.authors.length === 1
                          ? book.volumeInfo.authors[0]
                          : book.volumeInfo.authors.map((a) => `${a}, `)
                        : ""}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 py-2 bg-slate-100 text-center">
        {dataBooks.totalItems ? (
          <Paginate totalItems={dataBooks.totalItems} query={query} />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default SearchPage;
