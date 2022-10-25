import React, { useEffect } from "react";
import { auth } from "./authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import MenuContext from "./contexts/MenuContext";
import Notes from "./components/notes";
import DeletedNotes from "./components/deletedNotes";
import Menu from "./components/menu";
import Directory from "./components/search";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [user, isLoading] = useAuthState(auth);
  const [menuContext, setMenuContext] = useState(0);
  const [openNote, setOpenNote] = useState({
    title: "",
    note: "",
    createdAt: "",
    updatedAt: "",
    userId: "",
    deleted: "",
    id: "",
  })
  const value = { menuContext, setMenuContext };
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  return (
    <>
      <MenuContext.Provider value={value}>
        <div className="flex items-center justify-center min-h-screen h-200 bg-no-repeat bg-cover bg-[url('../public/assets/bg.svg')] md:px-0 px-4 py-4 md:py-10">
          <Directory setMenuToOpen={setOpenNote}/>
          <Notes noteToOpen={openNote}/>
          <DeletedNotes />
          <Menu/>
        </div>
      </MenuContext.Provider>
    </>
  );
}

export default App;
