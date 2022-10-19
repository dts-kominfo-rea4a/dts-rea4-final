// import { useOutletContext } from "react-router-dom";

import { useEffect } from "react";

const HomePage = () => {
  // const [title, setTitle] = useOutletContext();
  // setTitle("Home Page");
  useEffect(() => {
    document.title = "Home Page";
  }, []);

  return (
    <>
      <h1 className="text-2xl">Home Page</h1>
    </>
  );
};

export default HomePage;
