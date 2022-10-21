import { X, AlertCircle } from "react-feather";
const ModalInfo = ({ message, modalData }) => {
  const buttonHandler = (event) => {
    modalData(false);
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none ">
        <div className="relative w-full h-full max-w-md p-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              onClick={buttonHandler}
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Confirm modal</span>
            </button>
            <div className="p-6 text-center">
              <AlertCircle className="mx-auto mb-4 text-gray-400 w-14 h-14" />
              <h3 className="mb-5 text-lg font-semibold text-gray-600">
                {message}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
};

export default ModalInfo;
