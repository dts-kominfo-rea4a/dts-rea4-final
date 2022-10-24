import React, { useEffect } from "react";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";

const ProtectedHome = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    // redirect to landing if user not auth
    useEffect(() => {
        if (loading) {
        return;
        }

        if (!user) {
            navigate("/landing");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    return loading ? <div>Loading...</div> : children;
};

export default ProtectedHome;
