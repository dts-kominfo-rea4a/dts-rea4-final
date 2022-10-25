import { auth } from '../auth/firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { useNavigate  } from 'react-router-dom';
import React, {useEffect} from 'react';

const ProtectedComponent =({ children })=>{
    const navigate=useNavigate();
    const[user,isLoading,]=useAuthState(auth);
    useEffect(()=>{
   
    if(!user){
      navigate("/login");
      return;
    }
},[]);

    if(isLoading){
        return;
    }
    else{
        return children;
    }
  
}
export default ProtectedComponent;