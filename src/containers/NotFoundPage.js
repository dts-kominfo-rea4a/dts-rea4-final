import React from "react";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="notFoundScreen">
      <div className="notFoundScreen__background">
        <img
          className="notFoundScreen__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />

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
