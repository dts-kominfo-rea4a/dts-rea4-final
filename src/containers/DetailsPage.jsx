import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useBooksStore, {
  selectFetchBookDetail,
  selectBookDetail,
  selectIsLoading,
  selectError,
} from "../stores/book";
import { Bookmark, BookOpen, Users, ExternalLink } from "react-feather";
import ModalInfo from "../components/ModalInfo";

const DetailsPage = () => {
  let { bookId } = useParams();
  const [displayModal, setDisplayModal] = useState(true);
  const fetchBookDetail = useBooksStore(selectFetchBookDetail);
  const dataBook = useBooksStore(selectBookDetail);
  const isLoading = useBooksStore(selectIsLoading);
  const isError = useBooksStore(selectError);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBookDetail(bookId);
  }, [bookId]);

  const modalData = (data) => {
    setDisplayModal(false);
    navigate(-1);
  };

  return isError ? (
    <>
      {displayModal ? (
        <ModalInfo message={isError} modalData={modalData} />
      ) : (
        ""
      )}
    </>
  ) : (
    <>
      <section className="max-w-screen-lg px-2 py-6 bg-slate-100 text-slate-800">
        <div className="flex flex-wrap">
          <div className="flex flex-col w-full px-4 md:w-1/3">
            <img
              src={dataBook.imageLinks?.thumbnail}
              alt="books"
              className="flex-1 w-full"
            />
          </div>
          <div className="flex flex-col w-full px-2 mt-6 md:mt-0 md:w-2/3">
            <div className="flex-1">
              <h1 className="mb-2 text-2xl font-bold md:text-3xl">
                {dataBook.title}
              </h1>
              <h4 className="flex flex-wrap font-semibold text-md">
                <Users className="w-5 h-5 mr-2 text-slate-500" />
                Author:{" "}
                {dataBook.authors
                  ? dataBook.authors.length === 1
                    ? dataBook.authors[0]
                    : dataBook.authors.map((a, i) => <span key={i}>{a} ,</span>)
                  : ""}
              </h4>
              {dataBook.categories?.map((category) => (
                <div className="flex flex-wrap font-semibold">
                  <Bookmark className="w-5 h-5 mr-2 text-slate-500" />
                  {category}
                </div>
              ))}
              <div className="flex flex-wrap font-semibold">
                <BookOpen className="w-5 h-5 mr-2 text-slate-500" /> Publisher:{" "}
                {dataBook.publisher}
              </div>
              <div className="flex flex-wrap py-4">
                <a
                  href={dataBook.previewLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center pr-3 mb-2 mr-2 overflow-hidden text-sm font-medium tracking-wide text-center text-white uppercase rounded-lg bg-slate-400 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-slate-300"
                >
                  <ExternalLink className="w-8 h-8 p-2 mr-2 bg-slate-500" />
                  Preview in google books
                </a>
                <a
                  href={dataBook.infoLink}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center pr-3 mb-2 mr-2 overflow-hidden text-sm font-medium tracking-wide text-center text-white uppercase rounded-lg bg-slate-400 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-slate-300"
                >
                  <ExternalLink className="w-8 h-8 p-2 mr-2 bg-slate-500" />
                  See details in play books
                </a>
              </div>
            </div>
            <div>
              <span className="font-semibold">Description:</span>{" "}
              {dataBook?.description}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
