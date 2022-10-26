import { Link } from "react-router-dom";
import { signOutMe } from "../auth/firebase";
import AvatarUser from "../components/AvatarUser";
import useQuranStore, { selectStoreAyatLocal } from "../stores/quran";

const NavBar = () => {
  const storeAyatLocal = useQuranStore(selectStoreAyatLocal);
  const logoutHandler = async (e) => {
    e.preventDefault();
    await signOutMe();
    storeAyatLocal([]);
  };
  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div className="max-w-screen-md mx-auto px-2">
        <div className="bg-white h-14 rounded rounded-t-none px-4 py-2 shadow-md flex justify-between">
          <div className="items-center">
            <Link to="/" className="flex text-2xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-blue-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <span className="ml-1">Quran</span>
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <AvatarUser />
            <Link
              to="/"
              onClick={logoutHandler}
              className="px-2"
              title="Log out"
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
