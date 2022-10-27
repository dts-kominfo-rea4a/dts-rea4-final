import { useEffect } from "react";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const ProtectedComponent = ({ children }) => {
    const navigate = useNavigate();
    const [user,isLoading] = useAuthState(auth);

    useEffect(() => {
        if(!user){
            navigate("/login");
        }
    },[user,navigate]);
    
    if(isLoading) {
    } else {
        return children;
    }
}


export default ProtectedComponent;