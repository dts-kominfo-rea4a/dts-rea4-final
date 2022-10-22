import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import noimage from "../noimage.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import { Send, Trash } from "react-feather";
import ModalDeleteBookMark from "../components/ModalDeleteBookMark";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nodata from "../nodata.png";

const Bookmark = () => {
  const [user] = useAuthState(auth);
  const [dataBookMark, setDataBookMark] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const [bookId, setBookId] = useState(false);

  const handleShowModalDelete = (bookId) => {
    setDisplayModal(true);
    setBookId(bookId);
  };

  const handleDetail = (bookId) => {
    navigate(`/details/${bookId}`);
  };

  const modalData = (data) => {
    data ? deleteBookMark(bookId) : setDisplayModal(false);
  };

  const deleteBookMark = (id) => {
    setDisplayModal(false);
    const localBookMark = JSON.parse(localStorage.getItem(user.email));
    const filtered = localBookMark.filter((employee) => {
      return employee.id !== id;
    });
    const newItems = JSON.stringify(filtered);
    localStorage.setItem(user.email, newItems);
    toastifySuccess();
  };

  const toastifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    setDataBookMark(JSON.parse(localStorage.getItem(user.email)));
  }, [dataBookMark]);

  const navigate = useNavigate();

  return (
    <>
      <section className="py-2 bg-slate-100">
        <div className="">
          {dataBookMark && (
            <div className="flex flex-wrap">
              {dataBookMark?.map((book, index) => (
                <div
                  key={index}
                  className="flex flex-col w-full px-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 group"
                >
                  <div className="flex-1 mb-10 overflow-hidden bg-white shadow-lg rounded-xl">
                    <div className="relative">
                      <a class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-90 duration-300">
                        <div className="flex flex-wrap py-4">
                          <button
                            onClick={() => {
                              handleShowModalDelete(book.id);
                            }}
                          >
                            <Trash className="w-8 h-8 p-2 mr-2 bg-white-500 hover:text-red-500" />
                          </button>
                          <button
                            onClick={() => {
                              handleDetail(book.id);
                            }}
                          >
                            <Send className="w-8 h-8 p-2 mr-2 bg-white-500 hover:text-primary" />
                          </button>
                        </div>
                      </a>
                      <img
                        src={book.imageLinks ? book.imageLinks : noimage}
                        alt="img"
                        className="w-full"
                      />
                    </div>
                    <Link to={`/details/${book.id}`}>
                      <div className="px-6 py-2">
                        <h3>
                          <div className="block mb-3 font-semibold truncate text-md text-slate-900 group-hover:text-primary">
                            {book?.title}
                          </div>
                        </h3>
                        <p className="mb-4 text-xs text-slate-500">
                          {book.authors}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          {dataBookMark?.length === 0 && (
            <section className="flex h-screen">
              <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div className="max-w-screen-sm mx-auto text-center">
                  <img src={nodata} alt="img" className="w-full" />
                  <p className="font-bold mb-4 text-xl text-gray-400">
                    There is no data
                  </p>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
      <ToastContainer />
      {displayModal && (
        <ModalDeleteBookMark
          message="Are you sure want to delete?"
          modalData={modalData}
        />
      )}
    </>
  );
};

export default Bookmark;
