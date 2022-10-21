import React, { useEffect } from "react";
import { auth } from "./authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { createNote, getNote, updateNote } from "./api/Sheety";

function App() {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
    const ok = updateNote(2)
  }, [user, isLoading, navigate]);
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}

export default App;
