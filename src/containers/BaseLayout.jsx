import { useEffect, useState } from "react";
import logo from "../logo.png";
import imageProfile from "../profile.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOutMe } from "../authentication/firebase";
import { LogOut, Home, FileMinus, Calendar, ChevronDown } from "react-feather";
import { Link } from "react-router-dom";
import ModalConfirm from "../components/ModalConfirm";

const BaseLayout = ({ children, title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const [user] = useAuthState(auth);
  const [menus, setMenus] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
  });
  const [displayModal, setDisplayModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const menuHandler1 = () => {
    menus.menu1
      ? setMenus({ ...menus, menu1: false })
      : setMenus({ ...menus, menu1: true });
  };

  const modalData = (data) => {
    data ? signOutMe() : setDisplayModal(false);
  };

  return (
    <>
      <header className="fixed top-0 z-10 w-full">
        <nav className="px-4 py-3 bg-white border-b border-gray-200">
          <div className="flex flex-wrap items-center justify-between">
            <button
              onClick={() => {
                sidebar ? setSidebar(false) : setSidebar(true);
              }}
            >
              <svg
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
              >
                <path
                  className="fill-primary"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
              </svg>
            </button>
            <div className="flex items-center">
              <img src={logo} className="w-10 h-10 mr-2" alt="logo" />
              <span className="self-center text-xl font-bold whitespace-nowrap">
                <span className="text-primary">GO</span>
                <span className="text-blue-400">BOOKS</span>
              </span>
            </div>
            <div className="flex items-center lg:order-2">
              <img
                src={user ? (user.photoURL ? user.photoURL : imageProfile) : ""}
                className="w-10 rounded-full"
                alt="Profile"
              />
            </div>
          </div>
        </nav>
      </header>

      <aside
        className={`${
          sidebar ? "w-56 " : "w-18"
        } fixed top-0 left-0 h-full duration-300`}
      >
        <div className="flex flex-col justify-between h-full px-3 py-5 overflow-y-auto bg-white border-r border-gray-200 mt-14">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-300 rounded-xl hover:bg-gray-100 group"
              >
                <Home className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-primary" />
                <span
                  className={`${
                    sidebar ? "" : "hidden"
                  } ml-3 font-semibold whitespace-nowrap text-gray-700 group-hover:text-gray-900`}
                >
                  Home Page
                </span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-xl group hover:bg-gray-100"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
                name="menu1"
                onClick={menuHandler1}
              >
                <FileMinus className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-primary" />
                <span
                  className={`${
                    sidebar ? "" : "hidden "
                  }flex-1 ml-3 font-semibold text-left whitespace-nowrap text-gray-700 group-hover:text-gray-900`}
                >
                  Pages
                </span>
                <ChevronDown className={`${sidebar ? "" : "hidden "}w-6 h-6`} />
              </button>
              <ul
                id="dropdown-pages"
                className={`${menus.menu1 ? "" : "hidden "}py-2 space-y-2`}
              >
                <li>
                  <Link
                    to="/jadwal-sholat"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-300 rounded-xl group hover:bg-gray-100"
                  >
                    <Calendar className="flex-shrink-0 text-gray-500 duration-75 w-7 h-7 group-hover:text-primary" />
                    <span
                      className={`${
                        sidebar ? "" : "hidden"
                      } ml-3 font-semibold whitespace-nowrap text-gray-700 group-hover:text-gray-900`}
                    >
                      Jadwal Sholat
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="pt-5 mt-5 mb-12 space-y-2">
            <li>
              <a
                onClick={() => {
                  setDisplayModal(true);
                }}
                className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-xl hover:bg-gray-100 group"
              >
                <LogOut className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-primary" />
                <span
                  className={`${
                    sidebar ? "" : "hidden"
                  } ml-3 font-semibold whitespace-nowrap text-gray-700 group-hover:text-gray-900`}
                >
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div
        className={`${
          sidebar ? "ml-56 " : "ml-16 "
        }mt-16 bg-gray-100 text-gray-800 h-screen`}
      >
        {children}
      </div>
      {displayModal && (
        <ModalConfirm
          message="Apakah kamu yakin akan keluar?"
          modalData={modalData}
        />
      )}
    </>
  );
};

export default BaseLayout;
