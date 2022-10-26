import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../auth/firebase";

const AvatarUser = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <Link to="/profile">
      <div
        title="Profile"
        className="overflow-hidden relative w-8 h-8 bg-gray-100 ring-2 ring-gray-500 rounded-full dark:bg-gray-600"
      >
        {user.photoURL ? (
          <img src={user.photoURL} alt="Profile" className="" />
        ) : (
          <svg
            className="absolute -left-1 w-10 h-10 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </Link>
  ) : (
    ``
  );
};

export default AvatarUser;
