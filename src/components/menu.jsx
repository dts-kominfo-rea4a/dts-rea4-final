import React, { useContext } from "react";
import MenuContext from "../contexts/MenuContext";
import { logout } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const { menuContext, setMenuContext } = useContext(MenuContext);
  
  const navigate = useNavigate();

  const menuClickFn = (num) => {
    menuContext === num ? setMenuContext(0) : setMenuContext(num);
  };

  const logoutClickFn = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="absolute bottom-5 rounded-full max-h-14 bg-white flex justify-between items-center space-x-4 p-2 z-[52] drop-shadow-md">
      <div onClick={() => menuClickFn(1)} className="hover:scale-125 hover:mb-16 duration-700 ease-in-out">
        <div className="rounded-full p-3 bg-fuchsia-200">
          <svg className="w-5 h-5 text-fuchsia-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
      </div>
      <div onClick={() => menuClickFn(2)} className="hover:scale-125 hover:mb-16 duration-700 ease-in-out">
        <div className="rounded-full p-3 bg-fuchsia-200">
          <svg className="w-5 h-5 text-fuchsia-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>
      <div onClick={() => menuClickFn(3)} className="hover:scale-125 hover:mb-16 duration-700 ease-in-out">
        <div className="rounded-full p-3 bg-fuchsia-200">
          <svg className="w-5 h-5 text-fuchsia-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
      </div>
      <div onClick={logoutClickFn} className="hover:scale-125 hover:mb-16 duration-700 ease-in-out">
        <div className="rounded-full p-3 bg-fuchsia-200">
          <svg className="w-5 h-5 text-fuchsia-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Menu;
