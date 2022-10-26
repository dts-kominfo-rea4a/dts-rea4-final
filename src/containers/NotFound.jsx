import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-slate-700 text-gray-100 h-screen flex items-center text-center">
      <div className="text-center max-w-screen-md mx-auto">
        <div className="text-7xl">404</div>
        <div className="text-2xl">Not Found</div>
        <div className="pt-4">
          <Link
            to="/"
            className="p-2 border border-gray-200 rounded hover:bg-slate-900/80"
          >
            Kembali Ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
