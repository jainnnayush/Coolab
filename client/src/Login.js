import React from "react";
import { useMsal } from '@azure/msal-react';


const LoginPage = () => {
    const { instance } = useMsal();    
    const initializeSignIn = () => {
        try{
            instance.loginPopup()    
            console.log("loginPopup called");
        }
        catch(error){
            console.log(error);
        
        }
    };
  
    return (
      <>
        <div onClick={initializeSignIn}>Sign in</div>
      </>
    );
  };
export default LoginPage;