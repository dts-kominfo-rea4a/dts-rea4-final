import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Ayat from "../components/Ayat";
import Bismillah from "../components/Bismillah";
import BtnToTop from "../components/BtnToTop";
import Loader from "../components/Loader";
import ModalInfo from "../components/ModalInfo";
import Toast from "../components/Toast";
import useQuranStore, {
  selectError,
  selectFetchSurat,
  selectFetchSuratInfo,
  selectIsLoading,
  selectIsLoadMore,
  selectSuratInfo,
  selectSuratListAyat,
  selectSuratPagination,
  selectSuratSelected,
} from "../stores/quran";

const DetailPage = () => {
  const navigate = useNavigate();
  const fetchSurat = useQuranStore(selectFetchSurat);
  const fetchSuratInfo = useQuranStore(selectFetchSuratInfo);

  const surat = useQuranStore(selectSuratListAyat);
  const suratSelected = useQuranStore(selectSuratSelected);
  const suratInfo = useQuranStore(selectSuratInfo);
  const pagination = useQuranStore(selectSuratPagination);
  const isLoadMore = useQuranStore(selectIsLoadMore);
  const isLoading = useQuranStore(selectIsLoading);
  const error = useQuranStore(selectError);

  const { suratId } = useParams();

  const [atBottom, setAtBottom] = useState(false);
  const [prevVisible, setPrevVisible] = useState(false);
  const [nextVisible, setNextVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  useEffect(() => {
    setToastVisible(error !== null);
  }, [error]);

  useEffect(() => {
    document.title = `${suratSelected.id} ${suratSelected.name_complex} - ${suratSelected.verses_count} Ayat`;
    window.scrollTo(0, 0);
    setPrevVisible(suratId > 1 ? true : false);
    setNextVisible(suratId < 114 ? true : false);
  }, [suratSelected]);

  useEffect(() => {
    if (suratId >= 1 && suratId <= 114) {
      fetchSurat(suratId);
    } else {
      navigate("/notfound");
    }
  }, [suratId]);

  const prevHandler = (e) => {
    e.preventDefault();
    const prev = +suratId - 1;
    if (prev > 0 && prev < 115) {
      navigate(`/surat/${prev}`);
    } else {
      navigate(`/surat/1`);
    }
  };
  const nextHandler = (e) => {
    e.preventDefault();
    const next = +suratId + 1;
    if (next > 0 && next < 115) {
      navigate(`/surat/${next}`);
    } else {
      navigate(`/surat/114`);
    }
  };
  const homeHandler = () => {
    navigate("/");
  };
  const infoHandler = (e) => {
    e.preventDefault();
    fetchSuratInfo(suratId);
    setModalInfo(true);
  };
  useEffect(() => {
    if (atBottom && isLoadMore) {
      fetchSurat(suratId, pagination.next_page);
    }
    setAtBottom(false);
  }, [atBottom]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight;
    if (bottom) {
      setAtBottom(true);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen">
      <Loader visible={isLoading} />
      <div className="fixed top-0 left-0 z-10 w-full">
        <div className="max-w-screen-md mx-auto px-2">
          <div className="bg-white rounded rounded-t-none px-4 py-2 shadow flex justify-between flex-col sm:flex-row">
            {suratSelected ? (
              <div>
                <h1 className="font-bold">
                  {suratSelected?.id}. Surat {suratSelected?.name_complex} (
                  {suratSelected?.name_arabic})
                </h1>
                <div className="text-sm">
                  {suratSelected?.verses_count} ayat •{" "}
                  {suratSelected?.translated_name?.name}
                </div>
              </div>
            ) : (
              ``
            )}
            <div className="flex flex-row items-center justify-end">
              <Link to="/info" onClick={infoHandler} className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
              </Link>
              <Link
                to={!prevVisible ? `/` : `/surat/${+suratId - 1}`}
                disabled={!prevVisible}
                onClick={prevHandler}
                className={`px-2 ${!prevVisible ? `text-gray-200` : ``}`}
                title="Surat Sebelum"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </Link>
              <Link
                to="/"
                onClick={homeHandler}
                className="px-2"
                title="Kembali"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </Link>
              <Link
                to={!nextVisible ? `/` : `/surat/${+suratId + 1}`}
                onClick={nextHandler}
                disabled={!nextVisible}
                className={`px-2 ${!nextVisible ? `text-gray-200` : ``}`}
                title="Surat Selanjutnya"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 sm:pt-18">
        <div className="max-w-screen-md mx-auto px-2">
          <div className="grid grid-cols-1 gap-2">
            {suratSelected?.bismillah_pre ? <Bismillah /> : ``}
            {surat.map((ayat, index) => (
              <Ayat key={index} ayat={ayat} />
            ))}
            {pagination.next_page === null ? (
              <div className="p-2 text-center">
                <div className="inline-flex justify-center items-center w-full">
                  <hr className="my-8 w-5/6 h-px bg-gray-200 border-0" />
                  <span className="absolute left-1/2 px-3 rounded-lg font-medium text-sm text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">
                    Akhir Surat
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <BtnToTop />
      {toastVisible ? <Toast /> : ``}
      {modalInfo ? (
        <ModalInfo
          handler={setModalInfo}
          info={suratInfo}
          surat={suratSelected}
        />
      ) : (
        ``
      )}
    </div>
  );
};

export default DetailPage;
