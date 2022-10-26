const ModalInfo = ({ handler, info, surat }) => {
  return (
    <div
      id="modalInfo"
      tabIndex="-1"
      aria-hidden="true"
      onClick={(e) => {
        if (e.target.id === "modalInfo") {
          handler(false);
        }
      }}
      className="bg-slate-800/70 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
    >
      <div className="mx-auto p-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Surat {surat.name_complex}
            </h3>
            <button
              type="button"
              onClick={(e) => {
                handler(false);
              }}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <div
              className="text-base leading-relaxed text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: info?.text }}
            ></div>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Sumber : {info?.source}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInfo;
