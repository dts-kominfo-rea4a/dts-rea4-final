import { X, AlertCircle } from "react-feather";
const ModalConfirm = ({ message, modalData }) => {
  const buttonHandler = (event) => {
    if (event.target.name === "yes") {
      modalData(true);
    } else {
      modalData(false);
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
        <div className="relative w-full h-full max-w-md p-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={buttonHandler}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <AlertCircle className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                {message}
              </h3>
              <button
                onClick={buttonHandler}
                type="button"
                name="yes"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                Iya, yakin
              </button>
              <button
                onClick={buttonHandler}
                type="button"
                name="no"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                Tidak, batalkan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default ModalConfirm;
