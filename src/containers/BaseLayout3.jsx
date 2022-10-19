import { useEffect, useState } from "react";

const BaseLayout = ({ children }) => {
  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => setHamburger(hamburger ? false : true);
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleNavbar = () => {
      if (window.scrollY > 0 && navbar === false) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener("scroll", handleNavbar);

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={`bg-trasparent fixed top-0 left-0 w-full flex items-center z-10${
          navbar ? " navbar-blur" : ""
        }`}
      >
        <div className="container block">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#" className="font-bold text-lg text-dark block py-6">
                Tailwind <span className="text-primary">CSS</span>
              </a>
            </div>
            <div className="flex items-center px-4 mr-0">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className={`block absolute right-4 lg:hidden${
                  hamburger ? " hamburger-active" : ""
                }`}
                onClick={handleHamburger}
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className={`absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:static lg:block lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none${
                  hamburger ? "" : " hidden"
                }`}
              >
                <ul className="block font-bold lg:flex">
                  <li className="group">
                    <a
                      href="#hero"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#portfolio"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#clients"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Clients
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#blog"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#contact"
                      className="text-base text-dark py-2 mx-8 flex group-hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className={`absolute right-4 top-full mt-3 w-full max-w-[200px] rounded-lg bg-white shadow-lg overflow-hidden drop-shadow-lg`}
            >
              <ul className="block font-bold">
                <li className="group border-b border-slate-200">
                  <a
                    href="#hero"
                    className="text-base text-dark py-2 px-8 flex group-hover:bg-slate-100"
                  >
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-base text-dark py-2 px-8 flex group-hover:bg-slate-100"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer className="bg-dark pt-24 pb-12">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h2 className="font-bold text-4xl text-white mb-5">AMS</h2>
              <h3 className="font-bold text-2xl mb-2">Hubungi Saya</h3>
              <p>Jl. Rajapolah No.200</p>
              <p>Tasikmalaya</p>
            </div>
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h3 className="font-semibold text-xl mb-5">Kategori Tulisan</h3>
              <ul>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Tekonlogi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Gear
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Programing
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
              <h3 className="font-semibold text-xl mb-5">Tautan</h3>
              <ul>
                <li>
                  <a
                    href="#"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#clients"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="inline-block text-base hover:text-primary mb-3"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full pt-10 border-t border-slate-700">
            <div className="flex items-center justify-center mb-5">
              <a
                href="https://www.facebook.com/msofwanaji"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ajimsofwan/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ajimsofwan/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@ajimsofwan"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>TikTok</title>
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
            <p className="font-medium text-xs text-slate-500 text-center">
              Dibuat dengan ❤️ oleh{" "}
              <span className="font-bold hover:opacity-80">
                Aji Muhammad Sofwan
              </span>
              , Menggunakan
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-zinc-700 hover:opacity-80"
              >
                {" "}
                Next.js
              </a>{" "}
              dan
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sky-500 hover:opacity-80"
              >
                {" "}
                Tailwind CSS{" "}
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BaseLayout;
