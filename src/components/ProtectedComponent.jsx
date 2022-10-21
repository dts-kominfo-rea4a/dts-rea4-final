import React from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../auth/firebase";

import { useAuthState } from "react-firebase-hooks/auth"
import { useEffect } from "react";


//pada akhirnya componen akan menerima komponen lainnya (HOC)

const ProtectedComponent = ({ children }) => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);


    //gunkan use effect
    useEffect(() => {
        if (loading) {
            return;
        }
        //jika null redirect login
        if (!user) {
            navigate("/login");
            return;
        }
    }, [user, loading]);

    return loading ? <div>Loading ..</div> : children;

}

export default ProtectedComponent;