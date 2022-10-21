import React from "react";

import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import MovieDetail from "./containers/MovieDetailPage";
function App() {
  return (<>
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  </>
  );
}

export default App;
