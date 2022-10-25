import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";

function ProtectedComponent({ children }) {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!user) {
      navigate("/login");
    }
  }, [isLoading, user, navigate]);
  return isLoading ? <></> : children;
}

export default ProtectedComponent;
