import React, { useEffect } from "react";

import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";
import Loading from '../images/loading.gif';
import ThemeComponent from "./ThemeComponent";

const ProtectedComponent = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
        return;
        }

        if (!user) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, loading]);

    return loading ? <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'600px' }}><img src={Loading} width="80px" alt="Loading"/></div> : 
    <ThemeComponent children={children}></ThemeComponent>
};

export default ProtectedComponent;
