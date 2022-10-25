import React, { useContext, useState, useEffect } from "react";
import MenuContext from "../contexts/MenuContext";
import { createNote, getNote, updateNote } from "../api/Sheety";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { json } from "react-router-dom";
import { async } from "@firebase/util";

const Notes = ({ noteToOpen }) => {
  const { menuContext, setMenuContext } = useContext(MenuContext);
  const [user] = useAuthState(auth);
  const [notes, setNotes] = useState([]);
  const [editor, setEditor] = useState({
    editor: false,
  });
  const [note, setNote] = useState({
    title: "",
    note: "",
    createdAt: "",
    updatedAt: "",
    userId: "",
    deleted: "",
    id: "",
  });

  const exitWindow = () => {
    setMenuContext(0);
  };

  const addNote = async () => {
    await createNote({
      sheet1: {
        title: "Note " + new Date().getDate() + (new Date().getMonth() + 1) + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds(),
        note: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: user.uid,
        deleted: "F",
      },
    });
    getNotes();
  };

  const getNotes = async () => {
    const result = await getNote(user.uid);
    setNotes(result.data.sheet1);
    return result;
  };

  const editNote = async () => {
    setNote({ ...note, updatedAt: new Date() });
    await updateNote(note.id, { sheet1: note });
    getNotes();
    return 0;
  };

  const deleteNote = async () => {
    setNote({ ...note, updatedAt: new Date(), deleted: "T" });
    setEditor({ editor: false });
    return 0;
  };

  useEffect(() => {
    if (menuContext === 2) {
      getNotes();
      if (noteToOpen.id > 0) {
        setNote(noteToOpen);
        setEditor({ editor: true });
      }
    }
  }, [menuContext]);

  useEffect(() => {
    const update = async () => {
      await updateNote(note.id, { sheet1: note });
      getNotes();
    };
    if (note.deleted == "T") update()
  }, [note]);

  return (
    <>
      <div className={"w-full md:w-8/12 h-min-[400px] bg-white rounded-md z-10 shadow-md ease-in-out duration-500 transition-all translate-y-20 " + (menuContext === 2 ? "translate-y-0 opacity-100 z-50" : " opacity-0 z-0")}>
        <div className="flex justify-between items-center px-4 py-2">
          <div className="font-semibold">
            <span>Notes</span>
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
        <div className="grid grid-cols-6">
          <div className="col-span-3 md:col-span-2 border border-r-1 border-l-0 border-b-0 border-t-0 p-4">
            <div className="rounded-md bg-gray-100">
              <div className="flex justify-between p-2 items-center">
                <span className="font-semibold text-gray-800">your notes</span>
                <div>
                  <button onClick={addNote} className="bg-blue-800 text-white rounded-md px-2 py-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="overflow-auto">
                <div className="h-[280px]">
                  {notes.length > 0 ? (
                    <div>
                      {notes.map((notex, i) => (
                        <div
                          onClick={() => {
                            setNote(notex);
                            setEditor({ editor: true });
                          }}
                          key={i}
                          className="p-3 text-sm hover:bg-gray-200 duration-200 ease-in-out text-gray-800"
                          role="button">
                          {notex.title}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center p-5">
                      <span className="text-gray-800 text-sm">There's nothing in here</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 md:col-span-4">
            {editor.editor === true ? (
              <div>
                <input value={note.title} onChange={(e) => setNote({ ...note, title: e.target.value })} type="text" className="outline-none border font-bold text-gray-900 text-sm w-full p-2 px-4 " placeholder="Title" />
                <textarea value={note.note} onChange={(e) => setNote({ ...note, note: e.target.value })} cols="30" className="outline-none border  text-gray-900 text-sm w-full p-2 px-4 " rows="10"></textarea>
                <div className="flex justify-end p-4 space-x-2 text-sm">
                  <button onClick={editNote} className="bg-blue-800 text-white rounded-md px-3 py-1">
                    <span>save</span>
                  </button>
                  <button onClick={deleteNote} className="bg-red-800 text-white rounded-md px-3 py-1">
                    <span>delete</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="">
                  <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
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

export default Notes;
