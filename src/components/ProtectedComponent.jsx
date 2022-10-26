import { useEffect } from "react";

import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import LoaderFull from "./LoaderFull";
const ProtectedComponent = ({ children, withAuth = true }) => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (!user && withAuth) {
      navigate("/login");
    }
    if (user && !withAuth) {
      navigate("/");
    }
  }, [user, isLoading]);

  return isLoading ? <LoaderFull /> : children;
};

export default ProtectedComponent;
