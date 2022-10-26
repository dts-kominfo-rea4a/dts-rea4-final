import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./authentication/firebase";
import Home from "./containers/Home";

function App() {

  const [user] = useAuthState(auth);
  
  return (
    <>
      <Home isLoggedIn={user}/>
    </>
  );
}

export default App;