import { useEffect, useState } from "react";
import logo from "../logo.svg";
import imageProfile from "../profile.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signOutMe } from "../authentication/firebase";
import { LogOut, Home, FileMinus, Calendar } from "react-feather";
import { Link, Outlet } from "react-router-dom";
import ModalConfirm from "../components/ModalConfirm";

const Layout = () => {
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
        <nav className="px-4 py-3 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-600">
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
                  className="fill-cyan-400"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                ></path>
              </svg>
            </button>
            <div className="flex items-center">
              <img src={logo} className="w-14" alt="logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                React App
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
        <div className="flex flex-col justify-between h-full px-3 py-5 overflow-y-auto bg-white border-r border-gray-200 mt-14 dark:bg-gray-800 dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <Home className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span
                  className={`${
                    sidebar ? "" : "hidden"
                  } ml-3 font-semibold whitespace-nowrap`}
                >
                  Home Page
                </span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-xl group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
                name="menu1"
                onClick={menuHandler1}
              >
                <FileMinus className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white" />
                <span
                  className={`${
                    sidebar ? "" : "hidden "
                  }flex-1 ml-3 font-semibold text-left whitespace-nowrap`}
                >
                  Pages
                </span>
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <ul
                id="dropdown-pages"
                className={`${menus.menu1 ? "" : "hidden "}py-2 space-y-2`}
              >
                <li>
                  <Link
                    to="/jadwal-sholat"
                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-300 rounded-xl group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <Calendar className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-white" />
                    <span
                      className={`${
                        sidebar ? "" : "hidden"
                      } ml-3 font-semibold whitespace-nowrap`}
                    >
                      Jadwal Sholat
                    </span>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-xl dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Mail className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="flex-1 hidden ml-3 font-semibold whitespace-nowrap lg:flex">
                  Messages
                </span>
                <span className="items-center justify-center hidden w-5 h-5 text-xs font-semibold rounded-full text-cyan-800 bg-cyan-400 dark:bg-cyan-200 dark:text-cyan-800 lg:inline-flex">
                  6
                </span>
              </a>
            </li> */}
          </ul>
          <ul className="pt-5 mt-5 mb-12 space-y-2">
            <li>
              <a
                onClick={() => {
                  setDisplayModal(true);
                }}
                className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
              >
                <LogOut className="flex-shrink-0 text-gray-500 transition duration-75 w-7 h-7 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span
                  className={`${
                    sidebar ? "" : "hidden"
                  } ml-3 font-semibold whitespace-nowrap`}
                >
                  Logout
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <section
        className={`${
          sidebar ? "ml-56 " : "ml-16 "
        }mt-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-400 duration-300`}
      >
        <Outlet />
      </section>
      {displayModal && (
        <ModalConfirm
          message="Apakah kamu yakin akan keluar?"
          modalData={modalData}
        />
      )}
    </>
  );
};

export default Layout;
