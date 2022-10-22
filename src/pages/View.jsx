import React from "react";
import { useParams } from "react-router-dom";

const View = () => {
    const params = useParams();
    console.log(params)
  return (
    <>
      <h1>Ini Detail Page</h1>
    </>
  );
};
export default View;
