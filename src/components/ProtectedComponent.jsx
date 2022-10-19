import React, { useEffect } from "react";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import LoadingFullComponent from "./LoadingFullComponent";

const ProtectedComponent = ({ children, loginOnly = true }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }

    if (!user && loginOnly) {
      navigate("/login");
    }

    if (user && !loginOnly) {
      navigate("/");
    }
  }, [user, loading]);

  return loading ? <LoadingFullComponent /> : children;
};

export default ProtectedComponent;
