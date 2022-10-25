import React from "react";
import "./NotFoundPage.css";
import Nav from "../components/Nav";

const NotFoundPage = () => {
  return (
    <div className="notFoundScreen">
      <Nav />
      <div className="notFoundScreen__background">
        <div className="notFoundScreen__gradient" />
      </div>

      <div className="notFoundScreen__body">
        <div className="notFoundScreen__404text">
          <h1>404 - Page Not Found</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
