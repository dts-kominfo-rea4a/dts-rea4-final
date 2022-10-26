import { useEffect, useState } from "react";

const BtnToTop = () => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = (event) => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 360) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);
  return visible ? (
    <div className="fixed bottom-1 right-6">
      <button
        onClick={scrollToTop}
        className="bg-blue-700 rounded p-3 text-white hover:bg-blue-800 hover:shadow-lg"
        title="Scroll To Top"
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
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  ) : (
    ""
  );
};

export default BtnToTop;
