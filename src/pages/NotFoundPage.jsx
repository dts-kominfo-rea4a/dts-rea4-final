import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function NotFoundPage() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="grow py-16 px-4 flex flex-col justify-center items-center text-center">
        <h1 className="text-6xl pb-2 font-bold">Page not Found</h1>
        <p className="text-4xl pb-2 font-mono">404</p>
        <p className="text-sm pb-6">
          Sorry, looks like you followed a broken link or entered an invalid URL
        </p>
        <button
          className="px-8 py-3 rounded-full bg-secondary-100 hover:bg-secondary-200 active:bg-secondary-100 text-secondary-600 font-semibold"
          onClick={handleButtonClick}
        >
          Back to Home Page
        </button>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NotFoundPage;
