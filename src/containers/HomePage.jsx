import { useEffect } from "react";
import { signOutMe } from "../auth/firebase";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button
        onClick={async (e) => {
          await signOutMe();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default HomePage;
