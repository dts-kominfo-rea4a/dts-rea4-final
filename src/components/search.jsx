import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../contexts/MenuContext";
import { getNote } from "../api/Sheety";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Directory = ({ setMenuToOpen }) => {
  const { menuContext, setMenuContext } = useContext(MenuContext);
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const [user] = useAuthState(auth);
  const [filtered, setFiltered] = useState([]);
  
  useEffect(() => {
    const getNotes = async () => {
      const result = await getNote(user.uid);
      setNotes(result.data.sheet1);
      return result;
    };
    if (menuContext === 1) {
      getNotes();
    }
  }, [menuContext]);

  const exitWindow = () => {
    setMenuContext(0);
  };

  useEffect(()=>{
    setFiltered(notes);
  },[notes])

  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
    setFiltered(notes.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase())));
  };
  return (
    <>
      <div className={"absolute w-full h-full md:w-8/12 max-h-[400px] bg-white rounded-md z-10 shadow-md ease-in-out duration-500 transition-all translate-y-20" + (menuContext === 1 ? "translate-y-0 opacity-100 z-50" : " opacity-0 z-0")}>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="font-semibold">
            <span>Directory</span>
          </div>
          <div>
            <div className="flex justify-end space-x-2">
              <div className="p-2 rounded-full bg-green-500 cursor-pointer ease-in-out hover:scale-110 duration-200"></div>
              <div className="p-2 rounded-full bg-yellow-500 cursor-pointer ease-in-out hover:scale-110 duration-200"></div>
              <div onClick={exitWindow} className="p-2 rounded-full bg-red-500 cursor-pointer ease-in-out hover:scale-110 duration-200"></div>
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 h-full">
          <div>
            <div className="flex">
              <input value={search} onChange={searchChangeHandler} type="text" className="outline-none bg-fuchsia-50 border text-gray-900 text-sm w-full p-2 px-4 " placeholder="Search" />
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-4 gap-4 p-2 max-h-[500px] overflow-auto">
                {filtered.map((note, i) => (
                  <div
                    onClick={() => {
                      setMenuContext(2);
                      setMenuToOpen(note);
                    }}
                    className="col-span-2 md:col-span-1 border-1 bg-white z-50 drop-shadow-md rounded-md text-fuchsia-800 hover:shadow-fuchsia-300 hover:bg-fuchsia-100 hover:scale-105 hover:cursor-pointer ease-in-out duration-300"
                    key={i}>
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col items-center space-y-2 p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-xs">{note.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="flex flex-col items-center">
                  <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Directory;
