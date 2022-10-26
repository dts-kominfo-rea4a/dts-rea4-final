import React from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import Nav from "../components/Nav";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";
import auth from "../firebase";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              {/* <h3>Plans</h3> */}
              <button
                onClick={signOutHandler}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
